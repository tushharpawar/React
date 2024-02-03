import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  getLatestProducts,
  newProduct,
  getCategories,
  getAdminProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const app = express.Router();

app.post("/new", adminOnly, singleUpload, newProduct);

app.get("/latest", getLatestProducts);

app.get("/categories", getCategories);

app.get("/admin-products", adminOnly,getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly,singleUpload, updateProduct)
  .delete(adminOnly,deleteProduct);

export default app;
