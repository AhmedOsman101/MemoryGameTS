import { useAtom } from "jotai";
import { cardsAtom } from "../lib/Atoms";
import Card from "./Card";

const Board = () => {
	const [cards] = useAtom(cardsAtom);

	return (
		<>
			<div className="board grid grid-cols-4 gap-4 aspect-square">
				{cards.map((card, index) => {
					return <Card key={index} id={card} />;
				})}
			</div>
		</>
	);
};

export default Board;
