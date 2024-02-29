import express from "express"
import { adminOnly } from "../middlewares/auth.js";
import { newOrder,myOrders, allOrders,getSingleOrder } from "../controllers/order.js";

const app = express.Router();


app.post("/new",newOrder)
app.get("/my",myOrders)
app.get("/all",allOrders)

app.route("/:id").get(getSingleOrder);



export default app;