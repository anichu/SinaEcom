import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed">
			<a className="navbar-brand px-2" href="!#">
				SinaEcom
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<form class="search-box">
					<input type="search" name="" id="" placeholder="search..." />
					<button type="">search</button>
				</form>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="!#" style={{ display: "flex" }}>
							<span>
								<i
									class="fas fa-cart-arrow-down"
									style={{ fontSize: "20px" }}
								></i>
							</span>
							Cart
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="!#" style={{ display: "flex" }}>
							<span>
								<i class="fas fa-sign-in-alt" style={{ fontSize: "20px" }}></i>
							</span>
							SignIn
						</a>
					</li>

					<li className="nav-item dropdown mr-5">
						<a
							className="nav-link dropdown-toggle"
							href="!#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							User
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<a className="dropdown-item" href="!#">
								Profile
							</a>
							<a className="dropdown-item" href="!#">
								Logout
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
