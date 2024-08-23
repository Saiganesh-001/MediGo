const express = require('express');
const { addProducts, addProduct, products, product, companyAndCategory, company, category, categoryList, companyList } = require('../controllers/product.controller.js');

const router = express.Router();

router.post('/addProducts', addProducts)

router.get('/categories', categoryList)

router.get('/companies', companyList)

router.get('/products', products)
router.post('/products', addProduct)

router.get('/products/:id', product)

router.get('/companies/:companyName/categories/:categoryName/products', companyAndCategory)

router.get('/companies/:companyName/products', company);

router.get('/categories/:categoryName/products', category);

module.exports = router;        