import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			minlength: 3,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model("User", userSchema);
