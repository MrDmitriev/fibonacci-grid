import { useCallback, useEffect, useState } from 'react'
import { Row as RowType} from '../../types/Row';
import { clearFibonacciCells, createGrid, processCellClick } from '../../utils/grid';
import Row from './components/Row'

const Grid = () => {
	const [grid, setGrid] = useState(createGrid(10, 10));
	const [rows, setRows] = useState(Object.values(grid));

	const handleCellClick = useCallback(
		(row: number, column: number) => {
			const updatedGrid = processCellClick(grid, row, column);
			setGrid(updatedGrid);
			setRows(Object.values(updatedGrid));
		},
		[grid]
	)
	

	const handleFibonacciSequenceEvent = (e: CustomEvent) => {
		const {rowNumber, start, end} = e.detail;
		const updatedGrid = clearFibonacciCells(grid, rowNumber, start, end);
		const rows: RowType[] = Object.values(updatedGrid);
		setRows(rows);
	}

	useEffect(() => {
		document.addEventListener('fibonacci-sequence', handleFibonacciSequenceEvent as EventListener)
		return () => {
			document.removeEventListener('fibonacci-sequence', handleFibonacciSequenceEvent  as EventListener)
		};
	})
	
	return (
		<div className='fibonacci-grid'>
			{rows.map((row, i) => {

				return <Row
					key={i}
					rowNumber={i}
					row={row}
					onCellClick={handleCellClick}
				/>
			})}
		</div>
	)
}

export default Grid