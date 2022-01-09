import express from "express";
import { createProduct } from "../controllers/productControllers.js";
import { admin, auth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(auth, admin, createProduct);

export default router;