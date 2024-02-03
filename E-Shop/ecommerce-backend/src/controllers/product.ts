import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import { NewProductRequestBody } from "../types/types.js";
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";

export const newProduct = TryCatch(
  async (
    req: Request<{}, {}, NewProductRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, price, stock, category } = req.body;

    const photo = req.file;
    if (!photo) return next(new ErrorHandler("Please add photo", 400));

    if (!name || !price || !stock || !category) {
      rm(photo.path, () => {
        console.log("Deleted");
      });

      return next(new ErrorHandler("Please add all Fields!", 400));
    }

    await Product.create({
      name,
      stock,
      price,
      category: category.toLowerCase(),
      photo: photo?.path,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully!",
    });
  }
);

export const getLatestProducts = TryCatch(async (req, res, next) => {
  const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);

  if (!products) return next(new ErrorHandler("Products not found", 404));

  return res.status(201).json({
    success: true,
    products,
  });
});

export const getCategories = TryCatch(async (req, res, next) => {
  const categories = await Product.distinct("category");

  if (!categories) return next(new ErrorHandler("Invalid category", 404));

  return res.status(201).json({
    success: true,
    categories,
  });
});

export const getAdminProducts = TryCatch(async (req, res, next) => {
  const products = await Product.find({});

  if (!products) return next(new ErrorHandler("Products not found", 404));

  return res.status(201).json({
    success: true,
    products,
  });
});

export const getSingleProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Products not found", 404));

  return res.status(201).json({
    success: true,
    product,
  });
});

export const updateProduct = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { name, price, stock, category } = req.body;
  const photo = req.file;
  const product = await Product.findById(id);

  if (!product) return next(new ErrorHandler("Invalid product id", 400));

  if (photo) {
    rm(product.photo, () => {
      console.log("Old photo Deleted!");
    });

    product.photo = photo.path;
    return next(new ErrorHandler("Please add all Fields!", 400));
  }

  if (name) product.name = name;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (category) product.category = category;

  await product.save();

  return res.status(201).json({
    success: true,
    message: "Product updated successfully!",
  });
});

export const deleteProduct = TryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Invalid product id", 400));

  rm(product.photo!, () => {
    console.log("Product photo Deleted!");
  });

  await Product.deleteOne();

  return res.status(201).json({
    success: true,
    message: "Product Deleted Successfully!",
  });
});
