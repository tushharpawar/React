import express  from "express"
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/user.js"
import { connectDB } from "./utils/features.js";

const app = express();
const port = 4000;

connectDB();
app.use(express.json());
//Using api

app.get("/",(req,res)=>{
    res.send("Api is working with /api/v1")
})
app.use("/api/v1/user",userRouter)

app.use(errorMiddleware)

app.listen(port,()=>{
    console.log(`Server is running on https//localhost:${port}`);
    
})