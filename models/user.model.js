import mongoose, { mongo } from "mongoose";
import validator  from "validator";
 const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        min:3,
        max:15,
    },
    lastName:{
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
    },
    time:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now()
    }

 },{timestamps:true})

 export const user= mongoose.model("user",userSchema)