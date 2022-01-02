import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "react-spinners/RingLoader";
import Message from "../components/Message";

const SigninScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailTouch, setEmailTouch] = useState(false);
	const [passwordTouch, setPasswordTouch] = useState(false);
	const emailIsValid = email.trim() !== "" && email.includes("@gmail.com");
	const passwordIsValid = password.length >= 4;
	const emailIsInvalid = !emailIsValid && emailTouch;
	const passwordIsInvalid = !passwordIsValid && passwordTouch;

	// const userSignup = useSelector((state) => state.userSignup);
	// const { userInfo } = userSignup;
	// if (userInfo) {
	// }
	let formIsValid = false;
	if (emailIsValid && passwordIsValid) {
		formIsValid = true;
	} else {
		formIsValid = false;
	}
	const submitHandler = (e) => {
		e.preventDefault();
	};

	const emailBlurHandler = (e) => {
		setEmailTouch(true);
	};
	const passwordBlurHandler = (e) => {
		setPasswordTouch(true);
	};

	const emailChange = (e) => {
		setEmail(e.target.value);
		setEmailTouch(true);
	};
	const passwordChange = (e) => {
		setPassword(e.target.value);
	};

	const classesName =
		!emailIsInvalid && !passwordIsInvalid
			? "form-controls"
			: "form-controls invalid";
	return (
		<>
			<form onSubmit={submitHandler} className="signup-box">
				<div className="form-container">
					<h1>Login</h1>
					<div className={classesName}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={emailChange}
							onBlur={emailBlurHandler}
						/>
						{emailIsInvalid && (
							<p className="error-text">Please give correct email.</p>
						)}
					</div>
					<div className={classesName}>
						<label htmlFor="email">Your Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={passwordChange}
							onBlur={passwordBlurHandler}
						/>
						{passwordIsInvalid && (
							<p className="error-text">
								Password must be at least 4 characters.
							</p>
						)}
					</div>

					<div className="form-actions">
						<button type="submit" disabled={!formIsValid}>
							LogIn
						</button>
					</div>
					<span className="pb-3">
						Create an Account <Link to="/signup">Register</Link>
					</span>
				</div>
			</form>
		</>
	);
};

export default SigninScreen;
