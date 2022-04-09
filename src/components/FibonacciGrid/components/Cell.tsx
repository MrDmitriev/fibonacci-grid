type Props = {
	cell: number;
	cellNumber: number;
	rowNumber: number;
	isFibonacci: boolean,
	onCellClick: (row: number, column: number) => void;
}

const Cell = ({cell, cellNumber, rowNumber, isFibonacci, onCellClick }: Props) => {
	const handleCellClick = () => {
		onCellClick(rowNumber, cellNumber);
	}

	const fibonacciClassName = isFibonacci ? 'cell__fibonacci' : '';
	return (
		<>
			<div className={`cell ${fibonacciClassName}`} onClick={handleCellClick}>
				<div>{cell}</div>
			</div>
		</>
	)
}

export default Cell