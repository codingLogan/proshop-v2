import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

/**
 * @description Create new order
 * @route POST /api/orders
 * @access Private
 */
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

/**
 * @description Get logged in user's orders
 * @route GET /api/orders/myorders
 * @access Private
 */
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

/**
 * @description Get order by ID
 * @route GET /api/orders/:id
 * @access Private
 */
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by ID");
});

/**
 * @description Update order to paid
 * @route Get /api/orders/:id/pay
 * @access Private
 */
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

/**
 * @description Update order to delivered
 * @route Get /api/orders/:id/deliver
 * @access Private/Admin
 */
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivere");
});

/**
 * @description Get all orders
 * @route Get /api/orders
 * @access Private/Admin
 */
const getOrders = asyncHandler(async (req, res) => {
  res.send("get orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
