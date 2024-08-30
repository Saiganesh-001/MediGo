const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const ProductModel = require("../model/product.model.js")
require("dotenv").config();

const { seedDatabase, clearDatabase } = require("../config/testDatabase");

beforeAll(async () => {
  await mongoose.connect(process.env.DATABASE_TEST_URL);
});


beforeEach(async () => {
  await clearDatabase();
  await seedDatabase();
});


afterAll(async () => {
  await mongoose.connection.close();
});

describe("Product Creation", () => {

  it("POST /api/v1/addProduct - should return Product ID must be a non-empty string.", async () => {
    const newProduct = {
      // id: '123', // This should cause a validation error
      category: 'Beauty',
      productTitle: 'Test Product',
      company: 'Test Company',
      productQuantity: '150ml Body Mist in Spray Bottle',
      discount: 10,
      productMrpPrice: 100,
      availability: 'In Stock',
      rating: 4.5,
      productSellingPrice: 90
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual({
      success: false,
      message: "Product ID must be a non-empty string.",
    });
  });

  it("POST /api/v1/addProduct - should return Category must be a non-empty string.", async () => {
    const newProduct = {
      id: '123',
      category: 123,    // This should cause a validation error
      productTitle: 'Test Product',
      company: 'Test Company',
      productQuantity: '150ml Body Mist in Spray Bottle',
      discount: 10,
      productMrpPrice: 100,
      availability: 'In Stock',
      rating: 4.5,
      productSellingPrice: 90
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual({
      success: false,
      message: "Category must be a non-empty string.",
    });
  });

  it("POST /api/v1/addProduct - should return Rating cannot be negative.", async () => {
    const newProduct = {
      id: '123',
      category: "Skincare",    // This should cause a validation error
      productTitle: 'Test Product',
      company: 'Test Company',
      productQuantity: '150ml Body Mist in Spray Bottle',
      discount: 10,
      productMrpPrice: 100,
      availability: 'In Stock',
      rating: -1,
      productSellingPrice: 90
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual({
      success: false,
      message: "Rating cannot be negative.",
    });
  });

  it("POST /api/v1/addProduct - should return Rating cannot be greater than 5.", async () => {
    const newProduct = {
      id: '123',
      category: "Skincare",    // This should cause a validation error
      productTitle: 'Test Product',
      company: 'Test Company',
      productQuantity: '150ml Body Mist in Spray Bottle',
      discount: 10,
      productMrpPrice: 100,
      availability: 'In Stock',
      rating: 6,
      productSellingPrice: 90
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual({
      success: false,
      message: "Rating cannot be greater than 5.",
    });
  });

  it("POST /api/v1/addProduct - should return MRP Price cannot be negative.", async () => {
    const newProduct = {
      id: '123',
      category: "Skincare",
      productTitle: 'Test Product',
      company: 'Test Company',
      productQuantity: '150ml Body Mist in Spray Bottle',
      discount: 10,
      productMrpPrice: -100,       // This should cause a validation error
      availability: 'In Stock',
      rating: 3,
      productSellingPrice: 90
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual({
      success: false,
      message: "MRP Price cannot be negative.",
    });
  });

  it("POST /api/v1/addProduct - should return Product with this ID already exists.", async () => {
    const newProduct = {
      "id": "36",
      "category": "Haircare",
      "productTitle": "Nourishing Coconut Shampoo",
      "company": "Coco Bliss Ltd.",
      "productQuantity": "300ml Shampoo in Bottle",
      "discount": 10,
      "productMrpPrice": 600,
      "availability": "no",
      "rating": 4.3,
      "productSellingPrice": 540,
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(400);
    expect(res.body).toStrictEqual({
      success: false,
      message: "Product with this ID already exists.",
    });
  });

  it("POST /api/v1/addProduct - should create a product", async () => {
    const newProduct = {
      id: '123',
      category: 'Beauty',
      productTitle: 'Test Product',
      company: 'Test Company',
      productQuantity: "150ml Body Mist in Spray Bottle",
      discount: 10,
      productMrpPrice: 100,
      availability: 'yes',
      rating: 4.5,
      productSellingPrice: 90
    };

    const res = await request(app).post("/api/v1/addProduct").send(newProduct);

    expect(res.status).toBe(201);
    expect(res.body).toStrictEqual({
      success: true,
      message: "Product created successfully",
    });
  });
});

describe("Product Endpoints", () => {
  it("GET /api/v1/products - should return all products", async () => {
    const res = await request(app).get("/api/v1/products");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /api/v1/products - should filter products by price range", async () => {
    const minPrice = 50;
    const maxPrice = 150;
    const res = await request(app).get(`/api/v1/products?minPrice=${minPrice}&maxPrice=${maxPrice}`);

    expect(res.status).toBe(200);
    res.body.forEach((product) => {
      expect(product.productSellingPrice).toBeGreaterThanOrEqual(minPrice);
      expect(product.productSellingPrice).toBeLessThanOrEqual(maxPrice);
    });
  });

  it("GET /api/v1/products - should filter products by availability", async () => {
    const res = await request(app).get(`/api/v1/products?availability=yes`);

    expect(res.status).toBe(200);
    res.body.forEach((product) => {
      expect(product.availability).toBe("yes");
    });
  });

  it("GET /api/v1/products - should sort products by price in ascending order", async () => {
    const res = await request(app).get(`/api/v1/products?sortOption=price&orderList=true`);

    expect(res.status).toBe(200);
    const prices = res.body.map((product) => product.productSellingPrice);
    expect(prices).toEqual(prices.slice().sort((a, b) => a - b));
  });

  it("GET /api/v1/products - should sort products by rating in descending order", async () => {
    const res = await request(app).get(`/api/v1/products?sortOption=rating&orderList=false`);

    expect(res.status).toBe(200);
    const ratings = res.body.map((product) => product.rating);
    expect(ratings).toEqual(ratings.slice().sort((a, b) => b - a));
  });

  it("GET /api/v1/products - should sort products by discount in ascending order", async () => {
    const res = await request(app).get(`/api/v1/products?sortOption=discount&orderList=true`);

    expect(res.status).toBe(200);
    const discounts = res.body.map((product) => product.discount);
    expect(discounts).toEqual(discounts.slice().sort((a, b) => a - b));
  });

  it("GET /api/v1/products - should limit the number of returned products", async () => {
    const topProducts = 3;
    const res = await request(app).get(`/api/v1/products?topProducts=${topProducts}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeLessThanOrEqual(topProducts);
  });

  it("GET /api/v1/product:id - should return a product for a valid ID", async () => {
    const validProductId = "66acb97f5b010e1453ea5174";

    const res = await request(app).get(`/api/v1/product/${validProductId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(validProductId);
    expect(res.body).toHaveProperty("productTitle");
    expect(res.body).toHaveProperty("productSellingPrice");
  });

  it("GET /api/v1/product:id - should return 401 for a non-existent product ID", async () => {
    const nonExistentProductId = "000000000000000000000000";

    const res = await request(app).get(`/api/v1/product/${nonExistentProductId}`);

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Product with this ID does not exists.");
  });

  it("GET /api/v1/product:id - should return 400 for an invalid product ID format", async () => {
    const invalidProductId = "invalid_id_format";

    const res = await request(app).get(`/api/v1/product/${invalidProductId}`);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Invalid product ID format");
  });

  it("GET /api/v1/product:id - should return 500 if a server error occurs", async () => {
    jest.spyOn(ProductModel, 'findOne').mockImplementation(() => {
      throw new Error("Internal Server Error");
    });

    const validProductId = "66acb97f5b010e1453ea5174"; // Replace with a valid ID

    const res = await request(app).get(`/api/v1/product/${validProductId}`);

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Internal Server Error");
  });
});

describe("Category Endpoints", () => {
  it("GET /api/v1/categories - should return all categories", async () => {

    const res = await request(app).get("/api/v1/categories");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.response).toBeInstanceOf(Array);
    expect(res.body.response.length).toBeGreaterThan(0);
  });

  it("GET /api/v1/categories/:categoryName/products - should return all products in a category", async () => {
    const categoryName = "Haircare";

    const res = await request(app).get(`/api/v1/categories/${categoryName}/products`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
    for (let product of res.body) {
      expect(product.category).toBe("Haircare");
    }
  });
  
  it("GET /api/v1/categories/:categoryName/products - should return all products in a category", async () => {
    const categoryName = "Haircare";
    const minPrice = 50;
    const maxPrice = 1500;

    const res = await request(app).get(`/api/v1/categories/${categoryName}/products?minPrice=${minPrice}&maxPrice=${maxPrice}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
    res.body.forEach(product => {
        expect(product.productSellingPrice).toBeGreaterThanOrEqual(minPrice);
        expect(product.productSellingPrice).toBeLessThanOrEqual(maxPrice);
    });
  });
});

// describe("Company Endpoints", () => {
//   it("GET /api/v1/companies - should return all companies", async () => {
//     const res = await request(app).get("/api/v1/companies");
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBeGreaterThan(0);
//   });

//   it("GET /api/v1/companies/:companyName/products - should return all products by a company", async () => {
//     const companyName = "Beauty Labs";
//     const res = await request(app).get(`/api/v1/companies/${companyName}/products`);
//     expect(res.statusCode).toBe(200);
//     for (let product of res.body) {
//       expect(product.company).toBe("Beauty Labs");
//     }
//   });
// });

// describe("Company and Category Endpoints", () => {

//   it("GET /api/v1/companies/:companyName/categories/:categoryName/products - should return all products by a company and category", async () => {
//     const companyName = "Beauty Labs";
//     const categoryName = "Body Care";
//     const res = await request(app).get(`/api/v1/companies/${companyName}/categories/${categoryName}/products`);
//     expect(res.statusCode).toBe(200);
//     for (let product of res.body) {
//       expect(product.company).toBe("Beauty Labs");
//       expect(product.category).toBe("Body Care");
//     }
//   });
// });