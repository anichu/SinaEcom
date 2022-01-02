import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

function App() {
	return (
		<Router>
			<Navbar className="m-3" />
			<main className="py-3">
				<div className="container">
					<Routes>
						<Route exact path="/login" element={<SigninScreen />} />
					</Routes>
					<Routes>
						<Route exact path="/signup" element={<SignupScreen />} />
					</Routes>
				</div>
			</main>
		</Router>
	);
}

export default App;
