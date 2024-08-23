const ProductModel = require("../model/product.js")

const beautyProducts = [
    {
        id: '27',
        category: 'Body Care',
        productTitle: 'Shea Butter Body Cream',
        company: 'Sweet Treats Corp.',
        productQuantity: '250ml Cream in Jar',
        discount: 20,
        productMrpPrice: 750,
        availability: 'yes',
        rating: 3.7,
        productSellingPrice: 600
    },
    {
        id: '36',
        category: 'Haircare',
        productTitle: 'Nourishing Coconut Shampoo',
        company: 'Coco Bliss Ltd.',
        productQuantity: '300ml Shampoo in Bottle',
        discount: 10,
        productMrpPrice: 600,
        availability: 'no',
        rating: 4.3,
        productSellingPrice: 540
    },
    {
        id: '24',
        category: 'Makeup',
        productTitle: 'Luxe Matte Lipstick',
        company: 'Beauty Labs',
        productQuantity: '4g Lipstick in Tube',
        discount: 18,
        productMrpPrice: 500,
        availability: 'yes',
        rating: 4.5,
        productSellingPrice: 410.00000000000006
    },
    {
        id: '28',
        category: 'Skincare',
        productTitle: 'Brightening Lemon Face Wash',
        company: 'Glow Essentials Inc.',
        productQuantity: '150ml Face Wash in Tube',
        discount: 15,
        productMrpPrice: 550,
        availability: 'no',
        rating: 4,
        productSellingPrice: 467.5
    },
    {
        id: '3',
        category: 'Body Care',
        productTitle: 'Revitalizing Argan Oil Treatment',
        company: 'Coco Bliss Ltd.',
        productQuantity: '100ml Treatment in Bottle',
        discount: 8,
        productMrpPrice: 900,
        availability: 'no',
        rating: 3.9,
        productSellingPrice: 828
    },
    {
        id: '6',
        category: 'Haircare',
        productTitle: 'Silk Finish Foundation SPF 15',
        company: 'Beauty Labs',
        productQuantity: '50ml Foundation in Bottle',
        discount: 20,
        productMrpPrice: 1200,
        availability: 'yes',
        rating: 4.4,
        productSellingPrice: 960
    },
    {
        id: '2',
        category: 'Body Care',
        productTitle: 'Hydrating Primer',
        company: 'Beauty Labs',
        productQuantity: '30ml Primer in Bottle',
        discount: 10,
        productMrpPrice: 700,
        availability: 'yes',
        rating: 3.8,
        productSellingPrice: 630
    },
    {
        id: '4',
        category: 'Body Care',
        productTitle: 'Soothing Lavender Hand Cream',
        company: 'Sweet Treats Corp.',
        productQuantity: '75ml Hand Cream in Tube',
        discount: 20,
        productMrpPrice: 350,
        availability: 'yes',
        rating: 4.7,
        productSellingPrice: 280
    },
    {
        id: '31',
        category: 'Body Care',
        productTitle: 'Hydrating Primer',
        company: 'Beauty Labs',
        productQuantity: '30ml Primer in Bottle',
        discount: 10,
        productMrpPrice: 700,
        availability: 'yes',
        rating: 4.1,
        productSellingPrice: 630
    },
    {
        id: '13',
        category: 'Fragrance',
        productTitle: 'Summer Breeze Perfume',
        company: 'Divine Scents LLC',
        productQuantity: '100ml Perfume in Bottle',
        discount: 12,
        productMrpPrice: 2200,
        availability: 'yes',
        rating: 4.6,
        productSellingPrice: 1936
    },
    {
        id: '18',
        category: 'Skincare',
        productTitle: 'Fresh Citrus Body Mist',
        company: 'Divine Scents LLC',
        productQuantity: '150ml Body Mist in Spray Bottle',
        discount: 10,
        productMrpPrice: 800,
        availability: 'yes',
        rating: 4.2,
        productSellingPrice: 720
    },
    {
        id: '23',
        category: 'Makeup',
        productTitle: 'Eternal Bliss Eau de Parfum',
        company: 'Divine Scents LLC',
        productQuantity: '50ml Perfume in Bottle',
        discount: 5,
        productMrpPrice: 2500,
        availability: 'yes',
        rating: 4.8,
        productSellingPrice: 2375
    },
    {
        id: '12',
        category: 'Fragrance',
        productTitle: 'Coconut Milk Body Lotion',
        company: 'Sweet Treats Corp.',
        productQuantity: '250ml Body Lotion in Bottle',
        discount: 10,
        productMrpPrice: 500,
        availability: 'yes',
        rating: 3.9,
        productSellingPrice: 450
    },
    {
        id: '10',
        category: 'Haircare',
        productTitle: 'Daily Shine Serum',
        company: 'Coco Bliss Ltd.',
        productQuantity: '50ml Serum in Dropper Bottle',
        discount: 18,
        productMrpPrice: 750,
        availability: 'yes',
        rating: 4.3,
        productSellingPrice: 615
    },
    {
        id: '19',
        category: 'Skincare',
        productTitle: 'Clarifying Charcoal Face Mask',
        company: 'Glow Essentials Inc.',
        productQuantity: '100ml Face Mask in Tube',
        discount: 15,
        productMrpPrice: 650,
        availability: 'yes',
        rating: 4.5,
        productSellingPrice: 552.5
    },
    {
        id: '5',
        category: 'Body Care',
        productTitle: 'Waterproof Volume Mascara',
        company: 'Beauty Labs',
        productQuantity: '10ml Mascara in Tube',
        discount: 15,
        productMrpPrice: 600,
        availability: 'no',
        rating: 4.1,
        productSellingPrice: 510
    },
    {
        id: '38',
        category: 'Fragrance',
        productTitle: 'Eternal Bliss Eau de Parfum',
        company: 'Divine Scents LLC',
        productQuantity: '50ml Perfume in Bottle',
        discount: 5,
        productMrpPrice: 2500,
        availability: 'no',
        rating: 4.7,
        productSellingPrice: 2375
    },
    {
        id: '34',
        category: 'Fragrance',
        productTitle: 'Midnight Rose Eau de Toilette',
        company: 'Divine Scents LLC',
        productQuantity: '75ml Eau de Toilette in Bottle',
        discount: 20,
        productMrpPrice: 1800,
        availability: 'yes',
        rating: 4.6,
        productSellingPrice: 1440
    },
    {
        id: '14',
        category: 'Fragrance',
        productTitle: 'Luxe Matte Lipstick',
        company: 'Beauty Labs',
        productQuantity: '4g Lipstick in Tube',
        discount: 18,
        productMrpPrice: 500,
        availability: 'yes',
        rating: 4,
        productSellingPrice: 410.00000000000006
    },
    {
        id: '37',
        category: 'Haircare',
        productTitle: 'Daily Shine Serum',
        company: 'Coco Bliss Ltd.',
        productQuantity: '50ml Serum in Dropper Bottle',
        discount: 18,
        productMrpPrice: 750,
        availability: 'no',
        rating: 4.4,
        productSellingPrice: 615
    },
    {
        id: '9',
        category: 'Haircare',
        productTitle: 'Hydrating Aloe Vera Moisturizer',
        company: 'Glow Essentials Inc.',
        productQuantity: '100ml Moisturizer in Jar',
        discount: 12,
        productMrpPrice: 750,
        availability: 'yes',
        rating: 4.1,
        productSellingPrice: 660
    },
    {
        id: '39',
        category: 'Skincare',
        productTitle: 'Exotic Vanilla Body Scrub',
        company: 'Sweet Treats Corp.',
        productQuantity: '200ml Scrub in Jar',
        discount: 25,
        productMrpPrice: 700,
        availability: 'no',
        rating: 4.6,
        productSellingPrice: 525
    },
    {
        id: '26',
        category: 'Body Care',
        productTitle: 'Aloe Vera Body Lotion',
        company: 'Divine Scents LLC',
        productQuantity: '200ml Lotion in Bottle',
        discount: 10,
        productMrpPrice: 400,
        availability: 'yes',
        rating: 3.8,
        productSellingPrice: 360
    },
    {
        id: '21',
        category: 'Makeup',
        productTitle: 'Soothing Lavender Hand Cream',
        company: 'Sweet Treats Corp.',
        productQuantity: '75ml Hand Cream in Tube',
        discount: 20,
        productMrpPrice: 350,
        availability: 'yes',
        rating: 4.2,
        productSellingPrice: 280
    },
    {
        id: '17',
        category: 'Skincare',
        productTitle: 'Anti-Aging Retinol Cream',
        company: 'Glow Essentials Inc.',
        productQuantity: '50ml Cream in Jar',
        discount: 25,
        productMrpPrice: 1300,
        availability: 'no',
        rating: 4.5,
        productSellingPrice: 975
    },
    {
        id: '30',
        category: 'Fragrance',
        productTitle: 'Summer Breeze Perfume',
        company: 'Divine Scents LLC',
        productQuantity: '100ml Perfume in Bottle',
        discount: 12,
        productMrpPrice: 2200,
        availability: 'yes',
        rating: 4.7,
        productSellingPrice: 1936
    },
    {
        id: '16',
        category: 'Skincare',
        productTitle: 'Exotic Vanilla Body Scrub',
        company: 'Sweet Treats Corp.',
        productQuantity: '200ml Scrub in Jar',
        discount: 25,
        productMrpPrice: 700,
        availability: 'no',
        rating: 4.3,
        productSellingPrice: 525
    },
    {
        id: '1',
        category: 'Body Care',
        productTitle: 'Radiant Glow Vitamin C Serum',
        company: 'Glow Essentials Inc.',
        productQuantity: '30ml Serum in Dropper',
        discount: 15,
        productMrpPrice: 850,
        availability: 'yes',
        rating: 4.8,
        productSellingPrice: 722.5
    },
    {
        id: '8',
        category: 'Haircare',
        productTitle: 'Midnight Rose Eau de Toilette',
        company: 'Divine Scents LLC',
        productQuantity: '75ml Eau de Toilette in Bottle',
        discount: 20,
        productMrpPrice: 1800,
        availability: 'no',
        rating: 4.4,
        productSellingPrice: 1440
    },
    {
        id: '11',
        category: 'Fragrance',
        productTitle: 'Eternal Bliss Eau de Parfum',
        company: 'Divine Scents LLC',
        productQuantity: '50ml Perfume in Bottle',
        discount: 5,
        productMrpPrice: 2500,
        availability: 'yes',
        rating: 4.7,
        productSellingPrice: 2375
    },
    {
        id: '32',
        category: 'Body Care',
        productTitle: 'Waterproof Volume Mascara',
        company: 'Beauty Labs',
        productQuantity: '10ml Mascara in Tube',
        discount: 15,
        productMrpPrice: 600,
        availability: 'yes',
        rating: 4.5,
        productSellingPrice: 510
    },
    {
        id: '7',
        category: 'Haircare',
        productTitle: 'Nourishing Coconut Shampoo',
        company: 'Coco Bliss Ltd.',
        productQuantity: '300ml Shampoo in Bottle',
        discount: 10,
        productMrpPrice: 600,
        availability: 'yes',
        rating: 4,
        productSellingPrice: 540
    },
    {
        id: '35',
        category: 'Body Care',
        productTitle: 'Radiant Glow Vitamin C Serum',
        company: 'Glow Essentials Inc.',
        productQuantity: '30ml Serum in Dropper',
        discount: 15,
        productMrpPrice: 850,
        availability: 'yes',
        rating: 4.2,
        productSellingPrice: 722.5
    },
    {
        id: '29',
        category: 'Haircare',
        productTitle: 'Silk Finish Foundation SPF 15',
        company: 'Beauty Labs',
        productQuantity: '50ml Foundation in Bottle',
        discount: 20,
        productMrpPrice: 1200,
        availability: 'yes',
        rating: 4.6,
        productSellingPrice: 960
    },
    {
        id: '33',
        category: 'Body Care',
        productTitle: 'Revitalizing Argan Oil Treatment',
        company: 'Coco Bliss Ltd.',
        productQuantity: '100ml Treatment in Bottle',
        discount: 8,
        productMrpPrice: 900,
        availability: 'yes',
        rating: 3.7,
        productSellingPrice: 828
    }
];

exports.addProducts = (req, res) => {
    try {
        beautyProducts.map(async (product) => {
            const { id, category, productTitle, company, productQuantity, discount, productMrpPrice, availability, rating, productSellingPrice } = product;

            const response = await ProductModel.create({ id, category, productTitle, company, productQuantity, discount, productMrpPrice, availability, rating, productSellingPrice });
            console.log(response);
        })
        res.status(200).json(
            {
                success: true,
                message: 'Entry Created Successfully'
            }
        );
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}

exports.products = async (req, res) => {
    const {
        minPrice,
        maxPrice,
        topProducts,
        availability = "both",
        sortOption,
        orderList
    } = req.query;


    let query = {};

    if (availability !== "both") {
        query.availability = availability;
    }

    if (minPrice) {
        query.productSellingPrice = { $gte: Number(minPrice) };
    }

    if (maxPrice) {
        query.productSellingPrice = query.productSellingPrice || {};
        query.productSellingPrice.$lte = Number(maxPrice);
    }

    // Initialize a sort object
    let sort = {};

    if (sortOption) {
        const order = orderList === "true" ? 1 : -1;
        switch (sortOption) {
            case "price":
                sort.productSellingPrice = order;
                break;
            case "rating":
                sort.rating = order;
                break;
            case "discount":
                sort.discount = order;
                break;
            default:
                break;
        }
    }

    try {
        let response;
        if (topProducts) {
            response = await ProductModel.find(query)
                .sort(sort)
                .limit(Number(topProducts));
        } else {
            response = await ProductModel.find(query).sort(sort);
        }
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};


exports.categoryList = async (req, res) => {
    try {
        const response = await ProductModel.distinct("category");
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
};

exports.companyList = async (req, res) => {
    try {
        const response = await ProductModel.distinct("company");
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
};

exports.category = async (req, res) => {
    const { categoryName } = req.params;
    const {
        minPrice,
        maxPrice,
        topProducts,
        availability = "both",
        sortOption,
        orderList
    } = req.query;

    // Initialize query object with category filter
    let query = { category: categoryName };

    if (availability !== "both") {
        query.availability = availability;
    }

    if (minPrice) {
        query.productSellingPrice = { $gte: Number(minPrice) };
    }

    if (maxPrice) {
        query.productSellingPrice = query.productSellingPrice || {};
        query.productSellingPrice.$lte = Number(maxPrice);
    }

    // Initialize a sort object
    let sort = {};

    if (sortOption) {
        const order = orderList === "true" ? 1 : -1;
        switch (sortOption) {
            case "price":
                sort.productSellingPrice = order;
                break;
            case "rating":
                sort.rating = order;
                break;
            case "discount":
                sort.discount = order;
                break;
            default:
                break;
        }
    }

    try {
        let response;
        if (topProducts) {
            response = await ProductModel.find(query)
                .sort(sort)
                .limit(Number(topProducts));
        } else {
            response = await ProductModel.find(query).sort(sort);
        }
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};


exports.company = async (req, res) => {
    const { companyName } = req.params;
    const {
        minPrice,
        maxPrice,
        topProducts,
        availability = "both",
        sortOption,
        orderList
    } = req.query;

    let query = { company: companyName };

    if (availability !== "both") {
        query.availability = availability;
    }

    if (minPrice) {
        query.productSellingPrice = { $gte: Number(minPrice) };
    }

    if (maxPrice) {
        query.productSellingPrice = query.productSellingPrice || {};
        query.productSellingPrice.$lte = Number(maxPrice);
    }

    // Initialize a sort object
    let sort = {};

    if (sortOption) {
        const order = orderList === "true" ? 1 : -1;
        switch (sortOption) {
            case "price":
                sort.productSellingPrice = order;
                break;
            case "rating":
                sort.rating = order;
                break;
            case "discount":
                sort.discount = order;
                break;
            default:
                break;
        }
    }

    try {
        let response;
        if (topProducts) {
            response = await ProductModel.find(query)
                .sort(sort)
                .limit(Number(topProducts));
        } else {
            response = await ProductModel.find(query).sort(sort);
        }
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};


exports.companyAndCategory = async (req, res) => {
    const { companyName, categoryName } = req.params;
    const {
        minPrice,
        maxPrice,
        topProducts,
        availability = "both",
        sortOption,
        orderList
    } = req.query;

    // Initialize query object with company and category filters
    let query = { company: companyName, category: categoryName };

    if (availability !== "both") {
        query.availability = availability;
    }

    if (minPrice) {
        query.productSellingPrice = { $gte: Number(minPrice) };
    }

    if (maxPrice) {
        query.productSellingPrice = query.productSellingPrice || {};
        query.productSellingPrice.$lte = Number(maxPrice);
    }

    // Initialize a sort object
    let sort = {};

    if (sortOption) {
        const order = orderList === "true" ? 1 : -1;
        switch (sortOption) {
            case "price":
                sort.productSellingPrice = order;
                break;
            case "rating":
                sort.rating = order;
                break;
            case "discount":
                sort.discount = order;
                break;
            default:
                break;
        }
    }

    try {
        let response;
        if (topProducts) {
            response = await ProductModel.find(query)
                .sort(sort)
                .limit(Number(topProducts));
        } else {
            response = await ProductModel.find(query).sort(sort);
        }
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};

