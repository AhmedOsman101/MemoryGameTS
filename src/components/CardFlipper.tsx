import { useState } from "react";
import { motion } from "framer-motion";

const CardFlipper = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div
			onClick={handleClick}
			className="w-64 h-64 relative cursor-pointer">
			<motion.div
				className={`absolute w-full h-full rounded shadow-lg ${
					isFlipped ? "bg-red-500" : "hidden"
				} flex items-center justify-center text-white text-2xl font-bold transform rotate-y-180`}
				animate={{ rotateY: isFlipped ? 360 : 180 }}
				transition={{ duration: 0.4 }}>
				Back
			</motion.div>
			<motion.div
				className={`absolute w-full h-full rounded shadow-lg ${
					isFlipped ? "hidden" : "bg-blue-500"
				} flex items-center justify-center text-white text-2xl font-bold`}
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{ duration: 0.4 }}>
				Front
			</motion.div>
		</div>
	);
};

export default CardFlipper;
