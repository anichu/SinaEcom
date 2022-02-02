import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import EditProductScreen from "./screens/admin/EditProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

function App() {
	return (
		<Router>
			<Navbar className="m-3" />
			<main className="p-3">
				<Routes>
					<Route exact path="/" element={<HomeScreen />} />
				</Routes>
				<Routes>
					<Route exact path="/product/:id" element={<ProductDetailsScreen />} />
				</Routes>
				<Routes>
					<Route exact path="/login" element={<SigninScreen />} />
				</Routes>
				<Routes>
					<Route exact path="/signup" element={<SignupScreen />} />
				</Routes>
				<Routes>
					<Route exact path="/admin" element={<AdminScreen />} />
				</Routes>

				<Routes>
					<Route
						exact
						path="/admin/product/:id"
						element={<EditProductScreen />}
					/>
				</Routes>
			</main>
		</Router>
	);
}

export default App;
