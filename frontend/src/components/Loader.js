import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#ffffff");

	return (
		<div className="loader">
			<RingLoader
				color="red"
				css=""
				style={{ textAlign: "center" }}
				loading={loading}
				size={100}
			/>
		</div>
	);
};

export default Loader;
