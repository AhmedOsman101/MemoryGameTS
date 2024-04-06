/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useAtom } from "jotai";
import { FlippedCardsAtom, FlippedCardsIdsAtom } from "../lib/Atoms";
import { checkMatch } from "../lib/Functions";

const CardFlipper = ({ id, index }: { id: number; index: number }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isMatched] = useState(false);
	const [flippedCards, setFlippedCards] = useAtom(FlippedCardsAtom);
	const [flippedCardsIds, setFlippedCardsIds] = useAtom(FlippedCardsIdsAtom);

	const handleClick = (id: number, index: number) => {
		if ((flippedCards.size == 2 && !flippedCards.has(index)) || isMatched) {
			return;
		}

		// Create a new Set with the existing values of flippedCards
		const newFlippedCards = new Set(flippedCards);
		const newflippedCardsIds = new Set(flippedCardsIds);

		if (flippedCards.has(index)) {
			newFlippedCards.delete(index);
			newflippedCardsIds.delete(id);
		} else {
			// Add the index to the new set
			newFlippedCards.add(index);
			newflippedCardsIds.add(id);
		}

		// Update the flippedCards atom with the new set
		setFlippedCards(newFlippedCards);
		setFlippedCardsIds(newflippedCardsIds);

		// Call checkMatch function with id
		checkMatch(newFlippedCards, newflippedCardsIds);

		// Toggle the isFlipped state
		setIsFlipped((prev) => !prev);
	};

	return (
		<div
			onClick={() => handleClick(id, index)}
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
