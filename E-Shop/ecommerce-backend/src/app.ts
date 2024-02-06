import express  from "express"
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";
import { config } from "dotenv";
import morgan from "morgan";

import userRouter from "./routes/user.js"
import productRouter from "./routes/product.js"
import orderRouter from './routes/product.js'
import NodeCache from "node-cache";


config({
    path:"./.env",
})

const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI || ""

connectDB(mongoUri);

export const myCache = new NodeCache();

const app = express();

app.use(express.json());
app.use(morgan("dev"))
//Using api

app.get("/",(req,res)=>{
    res.send("Api is working with /api/v1")
})

app.use("/api/v1/user",userRouter)
app.use("/api/v1/product",productRouter)
app.use("/api/v1/order",orderRouter)
app.use("/uploads",express.static("uploads"))

app.use(errorMiddleware)

app.listen(port,()=>{
    console.log(`Server is running on https//localhost:${port}`);
    
})