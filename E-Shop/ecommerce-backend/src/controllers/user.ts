import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser =async (
    req: Request<{},{},NewUserRequestBody>,
    res: Response, 
    next: NextFunction
    ) => {
        try{
            const {name,email,photo,_id,dob,gender}=req.body;

            const user = await User.create({
                name,
                email,
                photo,
                _id,
                dob : new Date(dob),
                gender,
            })

            return res.status(201).json({
                success:true,
                message:`Welcome , ${user.name}`
            });
        }
        catch(error){
            return res.status(400).json({
                success:false,
                message:error,
            });
        }
    };
