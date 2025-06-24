import createHttpError from "node-http-error";
import { validateRegister } from "../services/registerService.js";
import {EmployeeModel} from "../model/Employee.js";
export const registerController = async(req,res,next)=>{
    const{username,password}  = req.body;
    
    try {
        // validate user and password
         let valid = await validateRegister(username,password);
        // Check if user already exists
         const emp = await EmployeeModel.findOne({username});
         if(emp){
          throw createHttpError(400,"This employee already exist");
         }else{

         }

         if(valid){
            return res.status(201).json({message:"Register success"})
         }
    } catch (error) {
        next(error)
    }
     
}