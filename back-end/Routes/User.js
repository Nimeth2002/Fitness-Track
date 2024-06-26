import express from "express";
import { UserRegister, UserLogin, getUserDashboard, getWorkoutsByDate, addWorkout, submitContactForm  } from "../Controllers/User.js";
import { verifyToken } from "../Middleware/VeryfyToken.js";


const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);
router.get("/dashboard", verifyToken, getUserDashboard) 
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);
router.post("/contact", submitContactForm);


export default router; 
