import React from 'react'
import { Cell as CellType } from '../../../types/Cell';
import Cell from './Cell';
type Props = {
	row: CellType;
	rowNumber: number;
	onCellClick: (row: number, column: number) => void;
};

const Row = ({row, rowNumber, onCellClick}: Props) => {
	const cells = Object.values(row);
	return (
		<div className='row'>
			{cells.map((cell, i) => <Cell key={i} rowNumber={rowNumber} cellNumber={i} cell={cell} onCellClick={onCellClick} />)}
		</div>
	)
}

export default Row