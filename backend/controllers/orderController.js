import Order from '../models/orderModel.js'
import asyncHandler from '../middleware/asyncHandler.js'

// desc: Create new order
// route: POST /api/orders
// access: private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('add order items')
})

// desc: get logged user's order
// route: GET /api/orders/mine
// access: private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get my orders')
})

// desc: get order by id
// route: GET /api/orders/:id
// access: private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('get order by id')
})

// desc: update order to paid
// route: PUT /api/orders/:id/pay
// access: private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid')
})

// desc: update order to delivered
// route: PUT /api/orders/:id/delivered
// access: private / admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('update order to delivered')
})

// desc: get all orders
// route: GET /api/orders/
// access: private / admin
const getOrders = asyncHandler(async (req, res) => {
  res.send('get all orders')
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
}
