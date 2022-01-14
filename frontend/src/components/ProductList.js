import React, { useEffect } from "react";
import { getProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Loader from "./Loader";
import Message from "./Message";

const ProductList = () => {
	const loadingStyle = {
		display: "flex",
		justifyContent: "center",
		height: "60vh",
		alignItems: "center",
	};
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProduct());
	}, [dispatch]);
	const getProducts = useSelector((state) => state.getProducts);
	const { loading, error, products } = getProducts;
	return (
		<>
			{loading ? (
				<div style={loadingStyle}>
					<Loader />
				</div>
			) : error ? (
				<Message color="danger">{error}</Message>
			) : (
				<div className="product-box">
					{products &&
						products.map((product) => (
							<Product product={product} key={product._id} />
						))}
				</div>
			)}
		</>
	);
};

export default ProductList;
