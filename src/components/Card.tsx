import { useAtom } from "jotai";
import { usersAtom } from "../lib/Atoms";

const Card = ({ id }: { id: number }) => {
	const [users] = useAtom(usersAtom);
	const user = users[id];
	return (
		<>
			<div className="w-full h-full aspect-square cursor-pointer flex items-center justify-center">
				<img
					className="w-full h-full object-scale-down aspect-square"
					src={user.images[0]}
					alt="img"
				/>
			</div>
		</>
	);
};

export default Card;
