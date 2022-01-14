import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<div className="card">
			<div className="card-body">
				<Link to="/">
					{product.image.map((img) => (
						<img
							src={img.name}
							className="card-img-bottom img-fluid"
							alt={product.name}
							key={img.name}
						/>
					))}
				</Link>
				<Link to="/id">
					<h5 className="card-title pt-2">{product.name}</h5>
				</Link>
				<p className="card-text">${product.price}</p>
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
