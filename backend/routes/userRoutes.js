import express from "express";
import {
	authUser,
	registerUser,
	updateUser,
} from "../controllers/userControllers.js";
import { auth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser).put(auth, updateUser);
router.route("/login").post(authUser);

export default router;
