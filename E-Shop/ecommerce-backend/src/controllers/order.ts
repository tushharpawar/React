import { TryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { NewOrderReqBody } from "../types/types.js";
import { Request } from "express";
import { invalidateCache, reduceStock } from "../utils/features.js";
import ErrorHandler from "../utils/utility-class.js";
import { myCache } from "../app.js";

export const newOrder = TryCatch(
  async (req: Request<{}, {}, NewOrderReqBody>, res, next) => {
    const {
      shippingInfo,
      orderItems,
      subTotal,
      total,
      tax,
      discount,
      user,
      shippingCharges,
    } = req.body;

    if (!shippingInfo || !orderItems || !subTotal || !total || !tax || !user)
      return next(new ErrorHandler("Please enter all fields!", 400));

    await Order.create({
      shippingInfo,
      orderItems,
      subTotal,
      total,
      tax,
      discount,
      user,
      shippingCharges,
    });

    await reduceStock(orderItems);

    await invalidateCache({ product: true, order: true, admin: true });

    return res.status(201).json({
      success: true,
      message: "Order Placed Successfully!",
    });
  }
);

export const myOrders = TryCatch(async (req, res, next) => {
  const { id: user } = req.query;

  let orders = [];
  const key = `my-orders-${user}`

  if (myCache.has(key)) orders = JSON.parse(myCache.get(key) as string);
  else {
    orders = await Order.find({ user });
    myCache.set("", JSON.stringify(orders));
  }

  return res.status(200).json({
    success: true,
    orders
  });
});

export const allOrders = TryCatch(async (req, res, next) => {
  const { id: user } = req.query;

  let orders = [];
  const key = `all-orders`

  if (myCache.has(key)) orders = JSON.parse(myCache.get(key) as string);
  else {
    orders = await Order.find().populate("user","name");
    myCache.set("", JSON.stringify(orders));
  }

  return res.status(201).json({
    success: true,
    orders
  });
});

export const getSingleOrder = TryCatch(async (req, res, next) => {
  const { id} = req.params;

  let order;
  const key = `order-${id}`

  if (myCache.has(key)) order = JSON.parse(myCache.get(key) as string);
  else {
    order = await Order.findById(id).populate("user","name");
    if(!order) return next(new ErrorHandler("Order not found",404))
    myCache.set("", JSON.stringify(order));
  }

  return res.status(201).json({
    success: true,
    order
  });
});