import { useState } from "react";
import Board from "./board.tsx";

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	function handlePlay(nextSquares: number[]) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(toMoveTo: number) {
		setCurrentMove(toMoveTo);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move === 0) {
			return;
		} else if (move == currentMove && move !== 0) {
			description = "you are at move #" + move;
		} else if (move > 0) {
			description = "go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button className="history" onClick={() => jumpTo(move)}>
					{description}
				</button>
			</li>
		);
	});

	return (
		<>
			<Board
				xIsNext={xIsNext}
				squares={currentSquares}
				onPlay={handlePlay}
				moveNumber={currentMove}
			/>
			<button className="reset" onClick={() => jumpTo(0)}>
				Reset
			</button>

				<ol>{moves}</ol>
		</>
	);
}
