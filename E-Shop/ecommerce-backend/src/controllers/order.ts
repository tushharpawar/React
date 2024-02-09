import { TryCatch } from "../middlewares/error.js";
import { Order } from "../models/order.js";
import { NewOrderReqBody } from "../types/types.js";
import { Request } from "express";
import { invalidateCache, reduceStock } from "../utils/features.js";
import ErrorHandler from "../utils/utility-class.js";

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

    if (
      !shippingInfo ||
      !shippingCharges ||
      !orderItems ||
      !subTotal ||
      !total ||
      !tax ||
      !discount ||
      !user
    ) return next(new ErrorHandler("Please enter all fields!",400));

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
