const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    productTitle: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    productQuantity: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    productMrpPrice: {
        type: Number,
        required: true
    },
    availability: {
        type: String,
        required: true,
        enum: ['yes', 'no']
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    productSellingPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
