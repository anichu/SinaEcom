import React, { useState } from "react";
import AddProductScreen from "./AddProductScreen";

const AdminScreen = () => {
	const [users, setUsers] = useState(false);
	const [products, setProducts] = useState(false);
	const [addUsers, setAddUsers] = useState(false);
	const [addProducts, setAddProducts] = useState(false);
	const rightSide = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "start",
	};
	return (
		<div className="admin-box">
			<div className="left-side">
				<div>
					<a
						data-toggle="collapse"
						href="#multiCollapseExample1"
						aria-expanded="false"
						aria-controls="multiCollapseExample1"
						onClick={(e) => setUsers(!users)}
						className="mb-1"
					>
						users
						<span>
							<i
								className={
									!users
										? "fas fa-chevron-right ml-1"
										: "fas fa-chevron-down ml-1"
								}
								style={{ fontSize: "14px" }}
							></i>
						</span>
					</a>

					<div class="collapse multi-collapse" id="multiCollapseExample1">
						<ul className="ml-3" style={{ borderLeft: "2px solid black" }}>
							<li className="ml-1">
								<p className="mb-1">Users</p>
							</li>
							<li className="ml-1">
								<p onClick={(e) => setAddUsers(!addUsers)}>Add User</p>
							</li>
						</ul>
					</div>
				</div>

				<div>
					<a
						data-toggle="collapse"
						href="#multiCollapseExample"
						aria-expanded="false"
						aria-controls="multiCollapseExample"
						onClick={(e) => setProducts(!products)}
						className="mb-1"
					>
						products
						<span>
							<i
								className={
									!products
										? "fas fa-chevron-right ml-1"
										: "fas fa-chevron-down ml-1"
								}
								style={{ fontSize: "14px" }}
							></i>
						</span>
					</a>

					<div class="collapse multi-collapse" id="multiCollapseExample">
						<ul className="ml-3" style={{ borderLeft: "2px solid black" }}>
							<li className="ml-1 pb-1">
								<a href="!#">products</a>
							</li>
							<li className="ml-1">
								<p
									onClick={() => setAddProducts(!addProducts)}
									style={{ cursor: "pointer" }}
								>
									Add Products
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<ul>
						<li>
							<a href="!#">orders</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="right-side" style={rightSide}>
				{addProducts && <AddProductScreen />}
				{!addProducts && <h1> admin screen</h1>}
			</div>
		</div>
	);
};

export default AdminScreen;
