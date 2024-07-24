function TrackStatus({ status }: { status: string | null }) {
	return status;
}

function CurrentStatus(potentialWinner: number | null, xIsNext: boolean) {
	if (potentialWinner) {
		return "winner: " + potentialWinner;
	} else {
		return "Next Player: " + (xIsNext ? "X" : "O");
	}
}

export { TrackStatus, CurrentStatus };
