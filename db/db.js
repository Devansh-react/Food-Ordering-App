import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectdatabase= async()=>{
    try {
        const connectiondatabase =await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
        console.log("MONGODB DATABASE CONNECTED SUCCESSFULLY",`${connectiondatabase.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED",error);
        process.exit(1);
    }
}

export default connectdatabase;