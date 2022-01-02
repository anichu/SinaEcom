import User from "../models/user.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateAuthToken.js";

// @desc Registered User
// @route POST /api/users
// @access Public

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const existUser = await User.findOne({ email });
	if (existUser) {
		res.status(404);
		throw new Error("User already exists😂😂");
	}
	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("User not found");
	}
});

// @desc Auth User & Get token
// @route POST /api/users/login
// @access Public

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw new Error("User not Found😂😪😥");
	}
	const match = await user.matchPassword(password);
	if (user && match) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password😂🤣");
	}
});
