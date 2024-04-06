import { useAtom } from "jotai";
import { cardsAtom } from "../lib/Atoms";
import CardFlipper from "./CardFlipper";

const Board = () => {
	const [cards] = useAtom(cardsAtom);

	return (
		<>
			<div className="w-[80%] grid grid-cols-6 gap-4">
				{cards.map((card, index) => {
					return <CardFlipper key={index} index={index} id={card} />;
				})}
			</div>
		</>
	);
};

export default Board;
