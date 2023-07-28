import Order from '../models/orderModel.js'
import asyncHandler from '../middleware/asyncHandler.js'

// desc: Create new order
// route: POST /api/orders
// access: private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
})

// desc: get logged user's order
// route: GET /api/orders/mine
// access: private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.status(200).json(orders)
})

// desc: get order by id
// route: GET /api/orders/:id
// access: private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )
  if (order) {
    res.status(200).json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
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
