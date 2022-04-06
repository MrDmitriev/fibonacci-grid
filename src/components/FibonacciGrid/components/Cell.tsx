type Props = {
	cell: number;
	cellNumber: number;
	rowNumber: number;
	onCellClick: (row: number, column: number) => void;
}

const Cell = ({cell, cellNumber, rowNumber, onCellClick }: Props) => {
	console.log('cell', cell);
	const handleCellClick = () => {
		onCellClick(rowNumber, cellNumber);
	}
	return (
		<>
			<div className='cell' onClick={handleCellClick}>
				<div>{cell}</div>
			</div>
		</>
	)
}

export default Cell