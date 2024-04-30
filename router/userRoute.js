import { Router } from "express";
import userdetails from "../controllers/user.controller.js";

const route= Router()
route.post("/registration",userdetails)

export default route
