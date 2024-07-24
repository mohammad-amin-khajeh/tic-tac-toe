function Square({ value, onSqaureClick }) {
	return (
		<button onClick={onSqaureClick} className="square">
			{value}
		</button>
	);
}

export { Square };
