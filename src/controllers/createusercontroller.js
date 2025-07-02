import createHttpError from "node-http-error";
import { UserModel } from "../model/UserModel.js";
import mongoose from "mongoose";
import { validateUser } from "../services/createUserService.js";

export const createUserController = async(req,res,next)=>{
  try {
    //  const isValidUser = validateUser(req?.body);
    // const user = new UserModel();
    const userExists = await UserModel.findOne({email:req?.body?.email});
    // if(userExists){
    //     throw createHttpError(400,"User with this email already registered");
    // }
    const newuser = new UserModel(req?.body);
    const user = await newuser.save();
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

export const getUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(mongoose.Types.ObjectId.isValid(userId));
    let userExists;
    if(userId){
      if(mongoose.Types.ObjectId.isValid(userId)){
        userExists = await UserModel.findById(userId);
        if(userExists){
          res.status(200).json({ user: userExists });
        }else{
          throw createHttpError(404, "User with this email does not exist");
        }
      }else{
        throw createHttpError(400, "Invalid userid provided");
      }

    }else{
      let users = await UserModel.find({});
      res.status(200).json({ users: users });
    }
    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UpdateUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(mongoose.Types.ObjectId.isValid(userId));
    // const isValidUser = validateUser(req?.body);
    if (userId) {
      if (mongoose.Types.ObjectId.isValid(userId)) {
        const user = await UserModel.findByIdAndUpdate(userId, req.body, {
          new: true, // return the updated document
          runValidators: true, // run schema validations
          overwrite: false, // set to true if you want to replace entire doc
        });
        if (user) {
          return res.status(200).json({ user: user });
        } else {
          throw createHttpError(404, "User with this email does not exist");
        }
      } else {
        throw createHttpError(400, "Invalid userid provided");
      }
    } else {
      throw createHttpError(400, "Userid not provided to update");
    }
  } catch (error) {
    next(error);
  }
};

export const DeleteUserController = async(req,res,next)=>{
  try {
    const userId = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(userId)){
       throw createHttpError(400, "Invalid userid provided");
    }
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if(!deletedUser){
      throw createHttpError(404, "User with this email does not exist");
    }
      return res.status(200).json({ user: deletedUser });
  } catch (error) {
    next(error)
  }
}