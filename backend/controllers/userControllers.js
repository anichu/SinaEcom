import User from "../models/user.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateAuthToken.js";

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
