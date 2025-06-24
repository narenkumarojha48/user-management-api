import createHttpError from "node-http-error";
import { UserModel } from "../model/UserModel.js";
import { validateUser } from "../services/createUserService.js";

export const createUserController = async(req,res,next)=>{
  try {
    //  const isValidUser = validateUser(req?.body);
    // const user = new UserModel();
    const userExists= await UserModel.findOne({email:req?.body?.email});
    // if(userExists){
    //     throw createHttpError(400,"User with this email already registered");
    // }
    const newuser = new UserModel(req?.body);
    const user = await newuser.save()
    // const user = await UserModel.insertOne(req?.body);
     console.log(userExists)
    //  if (Object.keys(isValidUser).length === 0) {

    //  }
    // throw createHttpError(400,isValidUser)
     res.status(201).send({message:"user created successfully",user})
  } catch (error) {
    next(error)
  }
}

export const getUserController = async(req,res,next)=>{
  try {
    res.send("getUserController")
  } catch (error) {
    next(error)
  }
}

export const UpdateUserController = async(req,res,next)=>{
  try {
    res.send("UpdateUserController")
  } catch (error) {
    next(error)
  }
}

export const DeleteUserController = async(req,res,next)=>{
  try {
    res.send("DeleteUserController")
  } catch (error) {
    next(error)
  }
}