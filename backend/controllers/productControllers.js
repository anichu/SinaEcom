import fs from "fs";
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

//@desc Fetch single product...
//@route GET /api/products/:id....
//@access private/admin

export const getProduct = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const product = await Product.findById(id);
	if (!product) {
		throw new Error("Product no found😂😂");
	}
	res.json(product);
});

export const updateProduct = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const product = await Product.findById(id);
	if (!product) {
		throw new Error("Product Not Found!");
	}
	const {
		name,
		brand,
		category,
		description,
		rating,
		price,
		countInStock,
		image,
	} = req.body;
	product.name = name || product.name;
	product.brand = brand || product.brand;
	product.category = category || product.category;
	product.description = description || product.description;
	product.rating = rating || product.rating;
	product.price = price || product.price;
	product.countInStock = countInStock || product.countInStock;
	product.user = req.user._id;
	product.image.unshift({
		name: image,
	});
	product.image.pop();
	const deleteImage = product.image[0].name;
	const updatedProduct = await product.save();
	console.log("image", image);
	console.log(updatedProduct);
	// if (image) {
	// 	const deleteFile = "./docs/deleteme.txt";
	// 	if (fs.existsSync(deleteImage)) {
	// 		fs.unlink(deleteImage, (err) => {
	// 			if (err) {
	// 				console.log(err);
	// 			}
	// 			console.log("deleted");
	// 		});
	// 	}
	// }
	if (updatedProduct) {
		res.json({
			message: "product updated successfully😂😂😂",
		});
	}
});
