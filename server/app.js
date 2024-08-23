const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())
require("dotenv").config();

const dbConnect = require("./config/database");
dbConnect();

const routes = require('./routes/product.route.js');
app.use('/api/v1', routes);

module.exports = app;