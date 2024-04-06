/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useAtom } from "jotai";
import {
	FlippedCardsAtom,
	FlippedCardsIdsAtom,
	MatchedAtom,
} from "../lib/Atoms";
import { checkMatch, findMatchingPairs } from "../lib/Functions";

const CardFlipper = ({ id, index }: { id: number; index: number }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isMatched, setIsMatched] = useState(false);
	const [flippedCards, setFlippedCards] = useAtom(FlippedCardsAtom);
	const [flippedCardsIds, setFlippedCardsIds] = useAtom(FlippedCardsIdsAtom);
	const [matched, setMatched] = useAtom(MatchedAtom);

	const handleClick = (id: number, index: number) => {
		if (checkMatch(index, matched) || isMatched) {
			setIsMatched(true);
			return;
		}

		if (
			flippedCards.size - matched.length == 2 &&
			!flippedCards.has(index)
		) {
			return;
		}

		// Create a new Set with the existing values of flippedCards
		const newFlippedCards = new Set(flippedCards);
		let newFlippedCardsIds = flippedCardsIds;

		if (flippedCards.has(index)) {
			newFlippedCards.delete(index);

			newFlippedCardsIds = flippedCardsIds.filter((item) => item !== id);
		} else {
			// Add the index to the new set
			newFlippedCards.add(index);
			newFlippedCardsIds.push(id);
		}

		// Call checkMatch function with id
		const matchingPairs = findMatchingPairs(
			newFlippedCards,
			newFlippedCardsIds,
		);

		setMatched(matchingPairs);

		// Toggle the isFlipped state
		setIsFlipped((prev) => !prev);

		// Update the flippedCards atom with the new set
		setFlippedCards(newFlippedCards);
		setFlippedCardsIds(newFlippedCardsIds);
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
