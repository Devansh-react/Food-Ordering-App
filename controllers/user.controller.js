import mongoose from "mongoose";
import { user} from "../models/user.model.js";
import {ApiError} from "../utilities/api.error.js"
import { ApiResponse } from "../utilities/api.response.js";
import asynchandler from "../utilities/asynchandler.js"
import validator from "validator";

const userdetails = asynchandler(async (req, res, next) => {
   const { firstName, lastName, email, PhoneNumber } = req.body

   if(!(firstName && lastName && email && PhoneNumber)){
      throw new ApiError(400,"please provid all details ")}


   // if ([Firstname, lastname, email, PhoneNumber].some(feild => feild?.trim() === "")) {
   //    throw new ApiError(400, "please provid all details ")}

   const existinguser = await user.find({
      $or: [{ firstName }, { lastName }, { email }]
   })
   if (existinguser) {
      throw new ApiError(400, "user already exist")
   }

   try {
      const newuser = await user.create({
         firstName,
         lastName,
         email,
         PhoneNumber
      })
      await newuser.save()
      res.status(200)
         .json(200, "user created successfully")
   }
   catch (error) {
      if (error.name === "ValidationError") {
         const validationError = Object.values(error.errors).map((err) => (err.message))
         return next(new ApiError(400, validationError))
      };
   }
   })
   export default userdetails














//  {const {Firstname,lastname,email,PhoneNumber} = req.body;
//   if(!(Firstname && lastname && email && PhoneNumber)){
//      throw new ApiError(400,"please provid all details ")
//   }
//   try {
//      const user =await user.create(Firstname,lastname,email,PhoneNumber)
//   res.status(201)
//   .json(new ApiResponse(201,"user create successfully"))
//   } catch (error) {

//     if(error.name === "validationerror") {
//      const validationerror= Object.values(error.errors).map((err)=>(err.message))
//      return next(new ApiError(400,validationerror))
//     };
//      // throw new ApiError(400,error.message || "user not created")
//   }}

