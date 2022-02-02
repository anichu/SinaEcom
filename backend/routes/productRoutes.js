import express from "express";
import {
	createProduct,
	getProduct,
	getProducts,
	updateProduct,
} from "../controllers/productControllers.js";
import { admin, auth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(auth, admin, createProduct).get(auth, getProducts);
router.route("/:id").get(getProduct).put(auth, admin, updateProduct);

export default router;
