import {Request,NextFunction, Response } from "express"
import ErrorHandler from "../utils/utility-class.js"
import { ControllerType } from "../types/types.js"

export const errorMiddleware = (err:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{

    err.message||="Internal server error"
    err.statusCode||=500
    
    if(err.name==="CastError") err.message = "Invalid ID"

    return res.status(400).json({
        success:false,
        message:err.message
    })
}

export const TryCatch = (
    func:ControllerType
) => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        return Promise.resolve(func(req,res,next)).catch(next);
    }
}
