const router = require("express").Router();
const Products = require('../models/productSchema')
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/products', async (req, res) => {
  const result = await Products.find().populate('regions.0.product.category')
  const products = result.map(product => product.regions[0].product)
  res.json({products})
})

module.exports = router