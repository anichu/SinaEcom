import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<div className="card">
			<div className="card-body">
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg"
						className="card-img-bottom img-fluid"
						alt="..."
					/>
				</Link>
				<Link to="/id">
					<h5 className="card-title pt-2">Lion</h5>
				</Link>
				<p className="card-text">$20.01</p>
				<p className="card-text">💕💕💕💕(10 reviews)</p>
				<div className="card-button">
					<button>Add to Cart</button>
					<button>view Details</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
