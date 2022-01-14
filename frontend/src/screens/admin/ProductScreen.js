import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-spinners/RingLoader";
import { getProduct } from "../../actions/productActions";
import Message from "../../components/Message";

const ProductScreen = () => {
	const getProducts = useSelector((state) => state.getProducts);
	const dispatch = useDispatch();
	const { error, loading, products } = getProducts;

	useEffect(() => {
		if (!products) {
			dispatch(getProduct());
		}
	}, [products, dispatch]);
	let product_id = 0;
	return (
		<div style={{ marginLeft: "-100px" }}>
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">image</th>
						<th scope="col">name</th>
						<th scope="col">user</th>
						<th scope="col">price</th>
						<th scope="col">brand</th>
						<th scope="col">countInStock</th>
						<th scope="col">category</th>
						<th colSpan="2">action</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<Loader />
					) : error ? (
						<Message color="danger"> {error}</Message>
					) : (
						products &&
						products.map((product) => (
							<tr>
								<td>{product_id++}</td>

								<td>
									{product.image &&
										product.image.map((img) => (
											<img
												src={img.name}
												alt=""
												style={{ width: "100px", height: "100px" }}
											/>
										))}
								</td>
								<td>{product.name}</td>
								<td>{product.user.name}</td>
								<td>{product.price}</td>
								<td>{product.brand}</td>
								<td>{product.countInStock}</td>
								<td>{product.category}</td>
								<td>
									<a href="">Edit</a>
								</td>
								<td>
									<a href="">Delete</a>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default ProductScreen;
