const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
require("dotenv").config();

const { seedDatabase, clearDatabase } = require("../config/testDatabase");

beforeEach(async () => {
  await clearDatabase();
  await seedDatabase();
});

beforeAll(async () => {
  await mongoose.connect(process.env.DATABASE_TEST_URL);
});

afterAll(async () => {
  await mongoose.connection.close();
});



describe("Product Endpoints", () => {
  it("GET /api/v1/products - should return all products", async () => {
    const res = await request(app).get("/api/v1/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /api/v1/products/:id - should return a product", async () => {
    const productId = "66acb97f5b010e1453ea5174";
    const res = await request(app).get(`/api/v1/products/${productId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.productTitle).toBe("Nourishing Coconut Shampoo");
  });
});

describe("Category Endpoints", () => {
  it("GET /api/v1/categories - should return all categories", async () => {
    const res = await request(app).get("/api/v1/categories");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /api/v1/categories/:categoryName/products - should return all products in a category", async () => {
    const categoryName = "Haircare"; 
    const res = await request(app).get(`/api/v1/categories/${categoryName}/products`);
    expect(res.statusCode).toBe(200);
    for (let product of res.body) {
      expect(product.category).toBe("Haircare");
    }
  });
});

describe("Company Endpoints", () => {
  it("GET /api/v1/companies - should return all companies", async () => {
    const res = await request(app).get("/api/v1/companies");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /api/v1/companies/:companyName/products - should return all products by a company", async () => {
    const companyName = "Beauty Labs";
    const res = await request(app).get(`/api/v1/companies/${companyName}/products`);
    expect(res.statusCode).toBe(200);
    for (let product of res.body) {
      expect(product.company).toBe("Beauty Labs");
    }
  });
});

describe("Company and Category Endpoints", () => {

  it("GET /api/v1/companies/:companyName/categories/:categoryName/products - should return all products by a company and category", async () => {
    const companyName = "Beauty Labs";
    const categoryName = "Body Care";
    const res = await request(app).get(`/api/v1/companies/${companyName}/categories/${categoryName}/products`);
    expect(res.statusCode).toBe(200);
    for (let product of res.body) {
      expect(product.company).toBe("Beauty Labs");
      expect(product.category).toBe("Body Care");
    }
  });
});

describe("Product Creation", () => {
  it("POST /api/v1/products - should create a product", async () => {
    const newProduct = {
      "id": "44",
      "category": "Fitness",
      "productTitle": "Protein Powder",
      "company": "FitLife Supplements",
      "productQuantity": "1kg Jar",
      "discount": 25,
      "productMrpPrice": 2000,
      "availability": "yes",
      "rating": 4.8,
      "productSellingPrice": 1500
    };

    const res = await request(app).post("/api/v1/products").send(newProduct);
    expect(res.statusCode).toBe(201);
    expect(res.body.productTitle).toBe("Protein Powder");
  });
});
