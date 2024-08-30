const express = require('express');

const { addProducts, addProduct } = require("../controllers/add.product.controller.js");

const { products, product, companyAndCategory, company, category, categoryList, companyList } = require('../controllers/product.controller.js');

const router = express.Router();

router.post('/addProducts', addProducts)

router.post('/addProduct', addProduct)



router.get('/products', products)

router.get('/product/:id', product)



router.get('/categories', categoryList)

router.get('/companies', companyList)



router.get('/categories/:categoryName/products', category);

router.get('/companies/:companyName/products', company);

router.get('/companies/:companyName/categories/:categoryName/products', companyAndCategory)


module.exports = router;        