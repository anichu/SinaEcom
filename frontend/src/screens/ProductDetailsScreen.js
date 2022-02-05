import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import "./productDetailsScreen.css";
import { addToCart } from "../actions/cartActions";

const ProductDetailsScreen = () => {
	const [qty, setQty] = useState(1);
	const navigate = useNavigate();

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
		dispatch(addToCart(id, qty));
		navigate("/");
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
										<h1 className="text-4xl">{product.name}</h1>
									</li>
									<li className="list-group-item">
										<p>
											<b> description: </b> {product.description}
										</p>
									</li>
									<li className="list-group-item">
										<b>price: ${product.price}</b>
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
											className="
												cursor-pointer
												px-3
												py-1.5
												text-base
												font-normal
												text-gray-700
												bg-white bg-clip-padding bg-no-repeat
												border border-solid border-gray-300
												rounded
												transition
												ease-in-out
												m-0
												focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
