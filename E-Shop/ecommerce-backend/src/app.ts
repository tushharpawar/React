import express  from "express"
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

import userRouter from "./routes/user.js"
import productRouter from "./routes/product.js"
import NodeCache from "node-cache";

const app = express();
const port = 4000;

connectDB();

export const myCache = new NodeCache();


app.use(express.json());
//Using api

app.get("/",(req,res)=>{
    res.send("Api is working with /api/v1")
})

app.use("/api/v1/user",userRouter)
app.use("/api/v1/product",productRouter)
app.use("/uploads",express.static("uploads"))

app.use(errorMiddleware)

app.listen(port,()=>{
    console.log(`Server is running on https//localhost:${port}`);
    
})