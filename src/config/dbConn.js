import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL2)
    }catch(err){
        console.log(err)
    }
}