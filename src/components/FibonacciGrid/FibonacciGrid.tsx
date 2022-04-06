import { useState } from 'react'
import { createGrid, processCellClick } from '../../utils/grid';
import Row from './components/Row'

const Grid = () => {
	const [grid, setGrid] = useState(createGrid(5, 5));
	const [rows, setRows] = useState(Object.values(grid));

	const handleCellClick = (row: number, column: number) => { // use callback
		console.log('Click', row, column);
		const updatedGrid = processCellClick(grid, row, column);
		console.log('updatedGrid', updatedGrid);

		setGrid(updatedGrid);
		setRows(Object.values(updatedGrid));
	}
	
	console.log('rows', rows);
	return (
		<div className='fibonacci-grid'>
			{rows.map((row, i) => <Row key={i} rowNumber={i} row={row} onCellClick={handleCellClick} />)}
		</div>
	)
}

export default Grid