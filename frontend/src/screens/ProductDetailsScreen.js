import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import "./productDetailsScreen.css";
import { addToCart } from "../actions/cartActions";

const ProductDetailsScreen = () => {
	const [qty, setQty] = useState(1);
	const { id } = useParams();
	const dispatch = useDispatch();
	const getSingleProducts = useSelector((state) => state.getSingleProduct);
	const { product, loading, error } = getSingleProducts;
	useEffect(() => {
		if (!product) {
			dispatch(getSingleProduct(id));
		}
	}, [id, dispatch, product]);
	const addToCartHandler = () => {
		console.log("anis");
		dispatch(addToCart(id, qty));
	};
	return (
		<>
			{loading ? (
				<div className="loadingBox">
					<Loader />
				</div>
			) : error ? (
				<Message color="danger">{error}</Message>
			) : (
				product && (
					<>
						<Link to="/" className="ml-2">
							<i
								class="fas fa-long-arrow-alt-left"
								style={{ fontSize: "20" }}
							></i>
						</Link>
						<div className="details-box">
							<div className="left-side">
								<div className="left-side-img">
									<img src={product.image[0].name} alt="" />
								</div>
							</div>
							<div className="middle-side">
								<ul class="list-group list-group-flush">
									<li className="list-group-item">
										{" "}
										<h1>{product.name}</h1>
									</li>
									<li className="list-group-item">
										<b> description: </b> {product.description}
									</li>
									<li className="list-group-item">
										<b>price: $ {product.price}</b>
									</li>
									<li className="list-group-item">
										<Rating
											rating={product.rating}
											numReviews={product.numReviews}
										/>
									</li>
									<li class="list-group-item">
										<b>
											Status:{" "}
											{Number(product.countInStock) > 0 ? (
												<span className="badge badge-dark">In Stock</span>
											) : (
												<span className="badge badge-danger">Out Of Stock</span>
											)}
										</b>
									</li>
									<li class="list-group-item">
										<b>Quantity: </b>
										<select
											name=""
											id=""
											value={qty}
											onChange={(e) => setQty(e.target.value)}
										>
											{[...Array(product.countInStock).keys()].map((x) => (
												<option value={x + 1}>{x + 1}</option>
											))}
										</select>
									</li>
									<li class="list-group-item">
										<button className="btn btn-dark" onClick={addToCartHandler}>
											Add To cart
										</button>
									</li>
								</ul>
							</div>
						</div>
					</>
				)
			)}
		</>
	);
};

export default ProductDetailsScreen;
