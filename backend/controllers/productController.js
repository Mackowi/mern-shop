import Product from '../models/productModel.js'
import asyncHandler from '../middleware/asyncHandler.js'

// desc: Fetch all products
// route: GET /api/products
// access: public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json(products)
})

// desc: Fetch product by id
// route: GET /api/products/:id
// access: public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    throw new Error('Resource not found')
  }
  res.json(product)
})

export { getProducts, getProductById }
