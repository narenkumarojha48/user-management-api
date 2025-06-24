import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotEnv from 'dotenv';
import {connectDB} from './src/config/dbConn.js';
import userRoutes from './src/routes/index.route.js';
dotEnv.config();
// const url = "mongodb://localhost:27017"
const url = "mongodb+srv://narender:narender@cluster0.nod5bli.mongodb.net/BayerDB?retryWrites=true&w=majority&appName=Cluster0"
// const url = "mongodb+srv://narenkumarojha48:Internet%232@cluster0.nod5bli.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
connectDB()

import { loginController } from './src/controllers/loginController.js';
import { userListController } from './src/controllers/userlistcontroller.js';
import { registerController } from './src/controllers/registercontroller.js';
// app.get("/login",(req,res)=>{
//   res.send("Login Page");
// })
app.use("/api/v1",userRoutes);
app.post("/login",loginController);
app.post("/register",registerController);
app.get("/getUser",userListController);
app.use((err,req,res,next)=>{
  
  // Handling mongoose schema validation errors
  if(err.name === 'ValidationError'){
    const formattedErrors = {}
    for(let field in err.errors){
      formattedErrors[field] = err.errors[field].message
    }
    return res.status(400).json({errors:formattedErrors})
  }
  // Handling mongoose duplicate key errors
   if (err.code && err.code === 11000) {
    const duplicatedField = Object.keys(err.keyValue)[0];
    const formattedErrors = {
      [duplicatedField]: `${duplicatedField} already exists`
    };

    return res.status(400).json({ errors: formattedErrors });
  }
  
  // Handling mongoose server errors
   if(err.name === 'MongoServerError'){
    const formattedErrors = {}
    // for(let field in err.errorResponse){
    //   formattedErrors[field] = err.errorResponse[field].errmsg;
    // }
    return res.status(400).json({errors:{message:err.errorResponse.errmsg}})
  }
  
  // Handling api level Request validation error
  res.status(err.status||500).json({errors:{message:err.message}});
})


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
})


