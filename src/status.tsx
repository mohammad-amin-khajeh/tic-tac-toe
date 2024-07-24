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
	} else if (currentMove === 9) {
		return "Draw!";
	} else {
		return "Next Player: " + (xIsNext ? "X" : "O");
	}
}

export { TrackStatus, CurrentStatus };
