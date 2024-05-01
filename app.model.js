import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import { ApiError } from "./utilities/api.error.js";
import route from "./router/userRoute.js";
import dotenv from "dotenv";
import connectdatabase from "./db/db.js";

const app=express()
dotenv.config({
    path:"./.env"
 })
 app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["POST"],
    Credentials:true
 }))


 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT || 7000,()=>{
    console.log(`app is running on port ${process.env.PORT || 7000}}`)
})
app.use('/user',route)
connectdatabase()

export default app;