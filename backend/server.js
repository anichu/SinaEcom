import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

const PORT = process.env.PORT;
console.log(PORT);

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} on port ${PORT} 🔥🔥🔥🚀🚀`
			.yellow.bold
	)
);
