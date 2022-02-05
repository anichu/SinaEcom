import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Loader from "../components/Loader";

const CartSreen = () => {
	const [cartItems, setCartItems] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const fetchCartItems = useSelector((state) => state.cart);
	const { cartItems: cartitems } = fetchCartItems;

	const addToCartHandler = (qty, id) => {
		dispatch(addToCart(id, qty));
	};
	const deleteProductHandler = (id) => {
		dispatch(removeFromCart(id));
	};
	useEffect(() => {
		setCartItems(cartitems);
	}, [cartitems]);

	const totalItems = cartItems.reduce((sum, currentValue) => {
		return sum + Number(currentValue.qty);
	}, 0);

	const totalPrice = cartItems.reduce((sum, currentValue) => {
		return sum + Number(Number(currentValue.qty) * Number(currentValue.price));
	}, 0);

	return (
		<div className="cart-box">
			<header>
				<h1 className="text-center text-3xl mb-3 capitalize ">cart</h1>
			</header>

			<div className="sub-cart-box row">
				<div className="col-md-8">
					<div class="list-group">
						{cartItems && cartItems.length > 0 ? (
							cartItems.map((product) => (
								<div className="list-group-item">
									<div>
										<img
											src={product.image}
											alt=""
											style={{ width: "60px", height: "50px" }}
										/>
										<Link className="ml-2" to={`/product/${product.product}`}>
											<b className="">{product.name} </b>
										</Link>
									</div>

									<p className="">
										<b className="badge badge-primary p-2"> ${product.price}</b>
										<span>
											<i className="fas fa-times"></i>
											<b className="mb-1">{product.qty}</b>
										</span>
									</p>
									<p className="">
										<b>
											qty:{" "}
											<select
												name=""
												id=""
												value={product.qty}
												onChange={(e) =>
													addToCartHandler(e.target.value, product.product)
												}
												className="
											"
											>
												{[...Array(product.countInStock).keys()].map((x) => (
													<option value={x + 1}>{x + 1}</option>
												))}
											</select>
										</b>
									</p>
									<button
										className="btn btn-danger btn-sm h-8"
										onClick={() => deleteProductHandler(product.product)}
									>
										delete
									</button>
								</div>
							))
						) : (
							<>
								<h1 className="">there are no items in you cart</h1>
							</>
						)}
					</div>
				</div>
				<div className="col-md-4 mt-md-0 mt-2">
					<div class="list-group">
						<div className="list-group-item">
							<h1 className="text-2xl">
								Total Items : <b>{totalItems}</b>
							</h1>
						</div>
						<div className="list-group-item">
							<p className="text-2xl">
								Total Price: <b className="ml-1">${totalPrice}</b>
							</p>
						</div>
						<div className="list-group-item">
							<Link
								className="btn btn-primary btn-lg d-block btn-sm text-light text-xl"
								style={{ width: "100%" }}
								to="/shipping"
							>
								proceed to buy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartSreen;
