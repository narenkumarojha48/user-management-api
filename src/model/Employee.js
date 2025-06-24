import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,'Mongo username is required'],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:[2,"Mongo Password should of min length 3 characters"],
        maxLength:[4,"Mongo Password should of max length 8 characters"],
        validate:{
            validator:function(value){
                return /[A-Z]/.test(value) && /\d/.test(value)
            },
            message:"Mongo Password must contain at least one Uppercase and one digit"
        }
    }
})
export const EmployeeModel = mongoose.models.Employee || mongoose.model("EmployeeModel",UserSchema)