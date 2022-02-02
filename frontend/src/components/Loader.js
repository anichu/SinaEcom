import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState("#ffffff");

	return (
		<div className="loader">
			<RingLoader loading={loading} size={100} />
		</div>
	);
};

export default Loader;
