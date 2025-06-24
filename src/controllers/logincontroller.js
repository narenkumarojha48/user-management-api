import validator from "validator";
import HTTPError from "node-http-error";
import  {validateLogin} from "../services/loginService.js";
import mongoose from "mongoose";
import { EmployeeModel } from "../model/Employee.js";
export const loginController = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  
  try {
       const vd = validateLogin(username,password)
      //  const emp1 = await Employee.findOne({username:username}).exec();
      const emp1 = new EmployeeModel({username,password})
      emp1.save()
       console.log(emp1)
       if(vd){
         return res.status(200).json({ message: "Login successful", user: { username } });
       }
    // res.status(400).json({ message: "Username and Password is required" });

    
  } catch (err) {
    // res.status(400).json({ message: err.message});
    console.error("httperr:-",err)
    next(err);
  }
  
};
