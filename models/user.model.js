import mongoose, { mongo } from "mongoose";
import validator, { validate } from "validator";
 const userSchema=new mongoose.Schema({
    Firstname:{
        type:String,
        require:true,
        min:3,
        max:15,
    },
    lastname:{
        type:String,
        require:true,
        min:3,
        max:15,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate:[validator.isEmail,"provide a valid email id"]
    },
    PhoneNumber:{
        type:Number,
        require:true,
        min:[11,"provide a valid phone number"],
        max:[11,"provide a valid phone number "]
    }

 },{timestamps:true})

 export const user= mongoose.model("user",userSchema)