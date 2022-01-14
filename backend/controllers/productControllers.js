import Product from "../models/product.js";
import asyncHandler from "express-async-handler";

// @desc Create Product
// @route POST /api/posts
// @access private/admin

export const createProduct = asyncHandler(async (req, res) => {
	const {
		name,
		brand,
		category,
		description,
		rating,
		numReviews,
		price,
		countInStock,
		user,
		image,
	} = req.body;

	const product = new Product({
		user,
		name,
		brand,
		category,
		description,
		rating,
		numReviews,
		price,
		countInStock,
		image,
	});
	const createProduct = await product.save();
	res.status(201).json(createProduct);
});

//@desc Fetch all products...
//@route GET /api/products....
//@access Public

export const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find()
		.populate("user", "name")
		.sort({ createdAt: -1 });

	res.json(products);
});
