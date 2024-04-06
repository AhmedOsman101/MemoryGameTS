import Board from "./components/Board";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="flex justify-center w-full">
				<Board />
			</div>
		</>
	);
};

export default App;
