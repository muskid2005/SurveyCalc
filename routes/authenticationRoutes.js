import express from "express";
import { validateLogin, validateRegister } from "../middlewares/validators.js";
import { registerUser, loginUser } from "../controllers/authenticateUsers.js";

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", validateLogin, loginUser);

export default router;
