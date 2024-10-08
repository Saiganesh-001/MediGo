const ProductModel = require('../model/product.model');

const seedDatabase = async () => {

    const products = [
        {
            "_id": "66acb97f5b010e1453ea5174",
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
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5173",
            "id": "27",
            "category": "Body Care",
            "productTitle": "Shea Butter Body Cream",
            "company": "Sweet Treats Corp.",
            "productQuantity": "250ml Cream in Jar",
            "discount": 20,
            "productMrpPrice": 750,
            "availability": "yes",
            "rating": 3.7,
            "productSellingPrice": 600,
            "createdAt": "2024-08-02T10:48:31.879Z",
            "updatedAt": "2024-08-02T10:48:31.879Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5177",
            "id": "3",
            "category": "Body Care",
            "productTitle": "Revitalizing Argan Oil Treatment",
            "company": "Coco Bliss Ltd.",
            "productQuantity": "100ml Treatment in Bottle",
            "discount": 8,
            "productMrpPrice": 900,
            "availability": "no",
            "rating": 3.9,
            "productSellingPrice": 828,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5178",
            "id": "6",
            "category": "Haircare",
            "productTitle": "Silk Finish Foundation SPF 15",
            "company": "Beauty Labs",
            "productQuantity": "50ml Foundation in Bottle",
            "discount": 20,
            "productMrpPrice": 1200,
            "availability": "yes",
            "rating": 4.4,
            "productSellingPrice": 960,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5179",
            "id": "2",
            "category": "Body Care",
            "productTitle": "Hydrating Primer",
            "company": "Beauty Labs",
            "productQuantity": "30ml Primer in Bottle",
            "discount": 10,
            "productMrpPrice": 700,
            "availability": "yes",
            "rating": 3.8,
            "productSellingPrice": 630,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea517a",
            "id": "4",
            "category": "Body Care",
            "productTitle": "Soothing Lavender Hand Cream",
            "company": "Sweet Treats Corp.",
            "productQuantity": "75ml Hand Cream in Tube",
            "discount": 20,
            "productMrpPrice": 350,
            "availability": "yes",
            "rating": 4.7,
            "productSellingPrice": 280,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea517b",
            "id": "31",
            "category": "Body Care",
            "productTitle": "Hydrating Primer",
            "company": "Beauty Labs",
            "productQuantity": "30ml Primer in Bottle",
            "discount": 10,
            "productMrpPrice": 700,
            "availability": "yes",
            "rating": 4.1,
            "productSellingPrice": 630,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea517c",
            "id": "13",
            "category": "Fragrance",
            "productTitle": "Summer Breeze Perfume",
            "company": "Divine Scents LLC",
            "productQuantity": "100ml Perfume in Bottle",
            "discount": 12,
            "productMrpPrice": 2200,
            "availability": "yes",
            "rating": 4.6,
            "productSellingPrice": 1936,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea517d",
            "id": "18",
            "category": "Skincare",
            "productTitle": "Fresh Citrus Body Mist",
            "company": "Divine Scents LLC",
            "productQuantity": "150ml Body Mist in Spray Bottle",
            "discount": 10,
            "productMrpPrice": 800,
            "availability": "yes",
            "rating": 4.2,
            "productSellingPrice": 720,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea517e",
            "id": "23",
            "category": "Makeup",
            "productTitle": "Eternal Bliss Eau de Parfum",
            "company": "Divine Scents LLC",
            "productQuantity": "50ml Perfume in Bottle",
            "discount": 5,
            "productMrpPrice": 2500,
            "availability": "yes",
            "rating": 4.8,
            "productSellingPrice": 2375,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5176",
            "id": "28",
            "category": "Skincare",
            "productTitle": "Brightening Lemon Face Wash",
            "company": "Glow Essentials Inc.",
            "productQuantity": "150ml Face Wash in Tube",
            "discount": 15,
            "productMrpPrice": 550,
            "availability": "no",
            "rating": 4,
            "productSellingPrice": 467.5,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5175",
            "id": "24",
            "category": "Makeup",
            "productTitle": "Luxe Matte Lipstick",
            "company": "Beauty Labs",
            "productQuantity": "4g Lipstick in Tube",
            "discount": 18,
            "productMrpPrice": 500,
            "availability": "yes",
            "rating": 4.5,
            "productSellingPrice": 410.00000000000006,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5181",
            "id": "19",
            "category": "Skincare",
            "productTitle": "Clarifying Charcoal Face Mask",
            "company": "Glow Essentials Inc.",
            "productQuantity": "100ml Face Mask in Tube",
            "discount": 15,
            "productMrpPrice": 650,
            "availability": "yes",
            "rating": 4.5,
            "productSellingPrice": 552.5,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5182",
            "id": "5",
            "category": "Body Care",
            "productTitle": "Waterproof Volume Mascara",
            "company": "Beauty Labs",
            "productQuantity": "10ml Mascara in Tube",
            "discount": 15,
            "productMrpPrice": 600,
            "availability": "no",
            "rating": 4.1,
            "productSellingPrice": 510,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5183",
            "id": "38",
            "category": "Fragrance",
            "productTitle": "Eternal Bliss Eau de Parfum",
            "company": "Divine Scents LLC",
            "productQuantity": "50ml Perfume in Bottle",
            "discount": 5,
            "productMrpPrice": 2500,
            "availability": "no",
            "rating": 4.7,
            "productSellingPrice": 2375,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5184",
            "id": "34",
            "category": "Fragrance",
            "productTitle": "Midnight Rose Eau de Toilette",
            "company": "Divine Scents LLC",
            "productQuantity": "75ml Eau de Toilette in Bottle",
            "discount": 20,
            "productMrpPrice": 1800,
            "availability": "yes",
            "rating": 4.6,
            "productSellingPrice": 1440,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5185",
            "id": "14",
            "category": "Fragrance",
            "productTitle": "Luxe Matte Lipstick",
            "company": "Beauty Labs",
            "productQuantity": "4g Lipstick in Tube",
            "discount": 18,
            "productMrpPrice": 500,
            "availability": "yes",
            "rating": 4,
            "productSellingPrice": 410.00000000000006,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5186",
            "id": "37",
            "category": "Haircare",
            "productTitle": "Daily Shine Serum",
            "company": "Coco Bliss Ltd.",
            "productQuantity": "50ml Serum in Dropper Bottle",
            "discount": 18,
            "productMrpPrice": 750,
            "availability": "no",
            "rating": 4.4,
            "productSellingPrice": 615,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5187",
            "id": "9",
            "category": "Haircare",
            "productTitle": "Hydrating Aloe Vera Moisturizer",
            "company": "Glow Essentials Inc.",
            "productQuantity": "100ml Moisturizer in Jar",
            "discount": 12,
            "productMrpPrice": 750,
            "availability": "yes",
            "rating": 4.1,
            "productSellingPrice": 660,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5188",
            "id": "39",
            "category": "Skincare",
            "productTitle": "Exotic Vanilla Body Scrub",
            "company": "Sweet Treats Corp.",
            "productQuantity": "200ml Scrub in Jar",
            "discount": 25,
            "productMrpPrice": 700,
            "availability": "no",
            "rating": 4.6,
            "productSellingPrice": 525,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5189",
            "id": "26",
            "category": "Body Care",
            "productTitle": "Aloe Vera Body Lotion",
            "company": "Divine Scents LLC",
            "productQuantity": "200ml Lotion in Bottle",
            "discount": 10,
            "productMrpPrice": 400,
            "availability": "yes",
            "rating": 3.8,
            "productSellingPrice": 360,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea518a",
            "id": "21",
            "category": "Makeup",
            "productTitle": "Soothing Lavender Hand Cream",
            "company": "Sweet Treats Corp.",
            "productQuantity": "75ml Hand Cream in Tube",
            "discount": 20,
            "productMrpPrice": 350,
            "availability": "yes",
            "rating": 4.2,
            "productSellingPrice": 280,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea518b",
            "id": "17",
            "category": "Skincare",
            "productTitle": "Anti-Aging Retinol Cream",
            "company": "Glow Essentials Inc.",
            "productQuantity": "50ml Cream in Jar",
            "discount": 25,
            "productMrpPrice": 1300,
            "availability": "no",
            "rating": 4.5,
            "productSellingPrice": 975,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea518c",
            "id": "30",
            "category": "Fragrance",
            "productTitle": "Summer Breeze Perfume",
            "company": "Divine Scents LLC",
            "productQuantity": "100ml Perfume in Bottle",
            "discount": 12,
            "productMrpPrice": 2200,
            "availability": "yes",
            "rating": 4.7,
            "productSellingPrice": 1936,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea518d",
            "id": "16",
            "category": "Skincare",
            "productTitle": "Exotic Vanilla Body Scrub",
            "company": "Sweet Treats Corp.",
            "productQuantity": "200ml Scrub in Jar",
            "discount": 25,
            "productMrpPrice": 700,
            "availability": "no",
            "rating": 4.3,
            "productSellingPrice": 525,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea518e",
            "id": "1",
            "category": "Body Care",
            "productTitle": "Radiant Glow Vitamin C Serum",
            "company": "Glow Essentials Inc.",
            "productQuantity": "30ml Serum in Dropper",
            "discount": 15,
            "productMrpPrice": 850,
            "availability": "yes",
            "rating": 4.8,
            "productSellingPrice": 722.5,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea518f",
            "id": "8",
            "category": "Haircare",
            "productTitle": "Midnight Rose Eau de Toilette",
            "company": "Divine Scents LLC",
            "productQuantity": "75ml Eau de Toilette in Bottle",
            "discount": 20,
            "productMrpPrice": 1800,
            "availability": "no",
            "rating": 4.4,
            "productSellingPrice": 1440,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5190",
            "id": "11",
            "category": "Fragrance",
            "productTitle": "Eternal Bliss Eau de Parfum",
            "company": "Divine Scents LLC",
            "productQuantity": "50ml Perfume in Bottle",
            "discount": 5,
            "productMrpPrice": 2500,
            "availability": "yes",
            "rating": 4.7,
            "productSellingPrice": 2375,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5191",
            "id": "32",
            "category": "Body Care",
            "productTitle": "Waterproof Volume Mascara",
            "company": "Beauty Labs",
            "productQuantity": "10ml Mascara in Tube",
            "discount": 15,
            "productMrpPrice": 600,
            "availability": "yes",
            "rating": 4.5,
            "productSellingPrice": 510,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5192",
            "id": "7",
            "category": "Haircare",
            "productTitle": "Nourishing Coconut Shampoo",
            "company": "Coco Bliss Ltd.",
            "productQuantity": "300ml Shampoo in Bottle",
            "discount": 10,
            "productMrpPrice": 600,
            "availability": "yes",
            "rating": 4,
            "productSellingPrice": 540,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5193",
            "id": "35",
            "category": "Body Care",
            "productTitle": "Radiant Glow Vitamin C Serum",
            "company": "Glow Essentials Inc.",
            "productQuantity": "30ml Serum in Dropper",
            "discount": 15,
            "productMrpPrice": 850,
            "availability": "yes",
            "rating": 4.2,
            "productSellingPrice": 722.5,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5194",
            "id": "29",
            "category": "Haircare",
            "productTitle": "Silk Finish Foundation SPF 15",
            "company": "Beauty Labs",
            "productQuantity": "50ml Foundation in Bottle",
            "discount": 20,
            "productMrpPrice": 1200,
            "availability": "yes",
            "rating": 4.6,
            "productSellingPrice": 960,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5195",
            "id": "33",
            "category": "Body Care",
            "productTitle": "Revitalizing Argan Oil Treatment",
            "company": "Coco Bliss Ltd.",
            "productQuantity": "100ml Treatment in Bottle",
            "discount": 8,
            "productMrpPrice": 900,
            "availability": "yes",
            "rating": 3.7,
            "productSellingPrice": 828,
            "createdAt": "2024-08-02T10:48:31.881Z",
            "updatedAt": "2024-08-02T10:48:31.881Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea5180",
            "id": "10",
            "category": "Haircare",
            "productTitle": "Daily Shine Serum",
            "company": "Coco Bliss Ltd.",
            "productQuantity": "50ml Serum in Dropper Bottle",
            "discount": 18,
            "productMrpPrice": 750,
            "availability": "yes",
            "rating": 4.3,
            "productSellingPrice": 615,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66acb97f5b010e1453ea517f",
            "id": "12",
            "category": "Fragrance",
            "productTitle": "Coconut Milk Body Lotion",
            "company": "Sweet Treats Corp.",
            "productQuantity": "250ml Body Lotion in Bottle",
            "discount": 10,
            "productMrpPrice": 500,
            "availability": "yes",
            "rating": 3.9,
            "productSellingPrice": 450,
            "createdAt": "2024-08-02T10:48:31.880Z",
            "updatedAt": "2024-08-02T10:48:31.880Z",
            "__v": 0
        },
        {
            "_id": "66adeec3ee41091f3cd45568",
            "id": "40",
            "category": "Hair Care",
            "productTitle": "Argan Oil Shampoo",
            "company": "Nature's Essence",
            "productQuantity": "300ml Bottle",
            "discount": 15,
            "productMrpPrice": 500,
            "availability": "yes",
            "rating": 4.2,
            "productSellingPrice": 425,
            "createdAt": "2024-08-03T08:48:03.017Z",
            "updatedAt": "2024-08-03T08:48:03.017Z",
            "__v": 0
        },
        {
            "_id": "66adef32c1b1d94941e48094",
            "id": "41",
            "category": "Skincare",
            "productTitle": "Vitamin C Serum",
            "company": "Glow Essentials",
            "productQuantity": "50ml Dropper Bottle",
            "discount": 25,
            "productMrpPrice": 1200,
            "availability": "yes",
            "rating": 4.5,
            "productSellingPrice": 900,
            "createdAt": "2024-08-03T08:49:54.094Z",
            "updatedAt": "2024-08-03T08:49:54.094Z",
            "__v": 0
        },
        {
            "_id": "66adefbb0388c7eba1720873",
            "id": "42",
            "category": "Oral Care",
            "productTitle": "Whitening Toothpaste",
            "company": "BrightSmile Co.",
            "productQuantity": "100g Tube",
            "discount": 10,
            "productMrpPrice": 300,
            "availability": "yes",
            "rating": 4.1,
            "productSellingPrice": 270,
            "createdAt": "2024-08-03T08:52:11.052Z",
            "updatedAt": "2024-08-03T08:52:11.052Z",
            "__v": 0
        },
        {
            "_id": "66adf045b22beaa5fe2bae42",
            "id": "43",
            "category": "Health & Wellness",
            "productTitle": "Multivitamin Gummies",
            "company": "WellLife Nutrition",
            "productQuantity": "60 Gummies",
            "discount": 30,
            "productMrpPrice": 850,
            "availability": "yes",
            "rating": 4.7,
            "productSellingPrice": 595,
            "createdAt": "2024-08-03T08:54:29.738Z",
            "updatedAt": "2024-08-03T08:54:29.738Z",
            "__v": 0
        }
    ]
    await ProductModel.insertMany(products);
};

const clearDatabase = async () => {
    // Clear your database
    await ProductModel.deleteMany({});
};

module.exports = { seedDatabase, clearDatabase };
