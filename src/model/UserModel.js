import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Mongo name is required'],
    },
    username:{
        type:String,
        required:[true,'Mongo username is required'],
        // unique:true
    },
    email:{
        type:String,
        required:[true,'Mongo email is required'],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:[2,"Mongo Password should of min length 3 characters"],
        maxLength:[8,"Mongo Password should of max length 8 characters"],
        validate:{
            validator:function(value){
                return /[A-Z]/.test(value) && /\d/.test(value)
            },
            message:"Mongo Password must contain at least one Uppercase and one digit"
        }
    },
      checkme:{
        type:Boolean,
        required:[true,'Mongo Please confirm the checkbox'],
    }
})
export const UserModel = mongoose.models.UserModel || mongoose.model("UserModel",UserSchema)