import express from "express"
import { adminOnly } from "../middlewares/auth.js";
import { newOrder,myOrders } from "../controllers/order.js";

const app = express.Router();


app.post("/new",newOrder)
app.get("/my",myOrders)



export default app;