const ProductModel = require("../model/product.model.js")
const mongoose = require("mongoose");


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
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};

exports.product = async (req, res) => {
    const _id = req.params.id;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid product ID format",
        });
    }

    try {
        const response = await ProductModel.findOne({ _id });

        // If ID Does Not exist
        if (!response) {
            return res.status(401).json({
                success: false,
                message: "Product with this ID does not exists.",
            });
        }

        res.status(200).json(response);
    } catch (err) {
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}


exports.categoryList = async (req, res) => {
    try {
        const response = await ProductModel.distinct("category");
        res.status(200).json({
            success: true,
            response,
        });
    } catch (err) {
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

