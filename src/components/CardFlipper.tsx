import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const CardFlipper = ({ id, index }: { id: number; index: number }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div
			onClick={handleClick}
			className="w-[161px] h-[161px] relative cursor-pointer flex-grow">
			<motion.div
				className={`absolute w-full h-full rounded shadow-lg ${
					isFlipped ? "" : "hidden"
				} flex items-center justify-center text-white text-2xl font-bold transform rotate-y-180`}
				animate={{ rotateY: isFlipped ? 360 : 180 }}
				transition={{ duration: 0.4 }}>
				<Card id={id} />
			</motion.div>
			<motion.div
				className={`absolute w-full h-full rounded shadow-lg ${
					isFlipped ? "hidden" : "bg-blue-500"
				} flex items-center justify-center text-white text-2xl font-bold`}
				animate={{ rotateY: isFlipped ? 180 : 0 }}
				transition={{ duration: 0.4 }}>
				<p>{index + 1}</p>
			</motion.div>
		</div>
	);
};

export default CardFlipper;
