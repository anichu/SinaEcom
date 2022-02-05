import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PayScreen = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("shippingAddress")) {
			navigate("/shipping");
		}
	}, [navigate]);
	const submitHandler = (e) => {
		e.preventDefault();
		if (name) {
			console.log(name);
		}
	};
	return (
		<div>
			<ol className="breadcrumb">
				<li className="breadcrumb-item ">
					<Link to="/">Home</Link>
				</li>
				<li className="breadcrumb-item ">
					<Link to="/login">Signin</Link>
				</li>
				<li className="breadcrumb-item" aria-current="page">
					<Link to="/shipping">Shipping</Link>
				</li>

				<li className="breadcrumb-item active" aria-current="page">
					<Link to="/payment">Payment</Link>
				</li>

				<li className="breadcrumb-item active" aria-current="page">
					<Link to="/payment">Placeorder</Link>
				</li>
			</ol>
			<h1 className="text-center my-4 py-3">Select your Payment method</h1>
			<form className="payment-box" onSubmit={submitHandler}>
				<div class="radio">
					<label>
						<input
							type="radio"
							value="Bkash"
							onChange={(e) => setName(e.target.value)}
							name="optradio"
						/>
						Bkash
					</label>
				</div>
				<div class="radio">
					<label>
						<input
							type="radio"
							name="optradio"
							value="Rocket"
							onChange={(e) => setName(e.target.value)}
						/>
						Rocket
					</label>
				</div>
				<div class="radio">
					<label>
						<input
							type="radio"
							name="optradio"
							value="Stripe"
							onChange={(e) => setName(e.target.value)}
						/>
						Stripe
					</label>
				</div>

				<div class="radio">
					<label>
						<input
							type="radio"
							name="optradio"
							value="Paypal"
							onChange={(e) => setName(e.target.value)}
						/>
						Paypal
					</label>
				</div>

				<div class="radio">
					<label>
						<input
							type="radio"
							name="optradio"
							value="Hand to hand"
							onChange={(e) => setName(e.target.value)}
						/>
						Hand to hand
					</label>
				</div>
				<button
					type="submit"
					className="px-2 py-1"
					id="payButton"
					disabled={!name}
				>
					continue
				</button>
			</form>
		</div>
	);
};

export default PayScreen;
