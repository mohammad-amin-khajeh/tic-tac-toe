import { Square } from "./square";
import { CalculateWinner } from "./CalculateWinner";
import { TrackStatus, CurrentStatus } from "./status";

export default function Board({ xIsNext, squares, onPlay, moveNumber }) {
	// tracking the status of the game
	const potentialWinner = CalculateWinner(squares);
	const currentStatus: string = CurrentStatus(potentialWinner, xIsNext, moveNumber);

	const handleClick = (index: number) => {
		if (squares[index] || CalculateWinner(squares)) {
			return;
		}

		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[index] = "X";
		} else {
			nextSquares[index] = "O";
		}
		onPlay(nextSquares);
	};

	return (
		<>
			<h1 className="status">
				<TrackStatus status={currentStatus} />
			</h1>
			<div className="flex justify-center">
				<Square value={squares[0]} onSqaureClick={() => handleClick(0)} />
				<Square value={squares[1]} onSqaureClick={() => handleClick(1)} />
				<Square value={squares[2]} onSqaureClick={() => handleClick(2)} />
			</div>
			<div className="flex justify-center">
				<Square value={squares[3]} onSqaureClick={() => handleClick(3)} />
				<Square value={squares[4]} onSqaureClick={() => handleClick(4)} />
				<Square value={squares[5]} onSqaureClick={() => handleClick(5)} />
			</div>
			<div className="flex justify-center">
				<Square value={squares[6]} onSqaureClick={() => handleClick(6)} />
				<Square value={squares[7]} onSqaureClick={() => handleClick(7)} />
				<Square value={squares[8]} onSqaureClick={() => handleClick(8)} />
			</div>
		</>
	);
}
