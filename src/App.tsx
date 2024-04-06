import Board from "./components/Board";
import Navbar from "./components/Navbar";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MatchedAtom } from "./lib/Atoms";
import { useAtom } from "jotai";

const App = () => {
	const [matched] = useAtom(MatchedAtom);

	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center w-full mb-5">
				<ProgressBar
					animated
					now={(matched.length / 18) * 100}
					className="w-[80%] mb-3"
				/>
				<Board />
			</div>
		</>
	);
};

export default App;
