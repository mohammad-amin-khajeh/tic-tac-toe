function TrackStatus({ status }: { status: string | null }) {
	return status;
}

function CurrentStatus(
	potentialWinner: number | null,
	xIsNext: boolean,
	currentMove: number,
) {
	if (potentialWinner) {
		return "winner: " + potentialWinner;
	}

	if (currentMove === 9) {
		return "Draw!";
	}

	return "Next Player: " + (xIsNext ? "X" : "O");
}

export { TrackStatus, CurrentStatus };
