import React, { useEffect, useState } from "react";
import { getProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Product from "./Product";
import Loader from "./Loader";
import Message from "./Message";
import {
	PRODUCT_SINGLE_RESET,
	ADD_PRODUCT_REVIEW_RESET,
} from "../constants/productConstants";

const ProductList = () => {
	const loadingStyle = {
		display: "flex",
		justifyContent: "center",
		height: "60vh",
		alignItems: "center",
	};

	const getProducts = useSelector((state) => state.getProducts);

	const { loading, error, products } = getProducts;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct("", 1));

		dispatch({
			type: PRODUCT_SINGLE_RESET,
		});
		dispatch({
			type: ADD_PRODUCT_REVIEW_RESET,
		});
	}, [dispatch]);

	const numsArray = [];
	let pageSize;
	if (products) {
		pageSize = products.pageSize;
		for (let i = 1; i <= pageSize; i++) {
			numsArray.push(i);
		}
	}

	const fetchProducts = (pageNumber) => {
		dispatch(getProduct("", pageNumber));
	};

	return (
		<>
			{loading ? (
				<div style={loadingStyle}>
					<Loader />
				</div>
			) : error ? (
				<Message color="danger">{error}</Message>
			) : (
				<>
					<div className="product-box">
						{products &&
							products.products.map((product) => (
								<Product product={product} key={product._id} />
							))}
					</div>
					<ul className="pagination-box">
						{numsArray.map((item) => (
							<li>
								<p
									className={
										Number(item) === Number(products.pageNumber) ? "active" : ""
									}
									onClick={() => fetchProducts(item)}
								>
									{item}
								</p>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};

export default ProductList;
