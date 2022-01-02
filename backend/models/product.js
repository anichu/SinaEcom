import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		comment: {
			type: String,
			requ,
		},
	},
	{
		timestamps: true,
	}
);
