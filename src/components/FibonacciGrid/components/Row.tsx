import { useEffect } from 'react'
import { Row as RowType } from '../../../types/Row';
import { findFibonacciSequence } from '../../../utils/fibonacci-sequence';
import Cell from './Cell';

type Props = {
	row: RowType;
	rowNumber: number;
	onCellClick: (row: number, column: number) => void;
};

const Row = ({ row, rowNumber, onCellClick }: Props) => {
	const cells = Object.values(row);
	const [start, end] = findFibonacciSequence(cells);

	useEffect(() => {
		if (end > 0) {
			const event = new CustomEvent('fibonacci-sequence', { detail: { rowNumber, start, end } });
			setTimeout(() => {
				document.dispatchEvent(event);
			}, 2000)
		}

	}, [rowNumber, end, start])

	return (
		<div className='row'>
			{cells.map(
				(cell, i) => {
					const isFibonacci = i >= start && i <= end && (start !== end);

					return <Cell
						key={i}
						rowNumber={rowNumber}
						cellNumber={i}
						cell={cell}
						isFibonacci={isFibonacci}
						onCellClick={onCellClick}
					/>
				})}
		</div>
	)
}

export default Row