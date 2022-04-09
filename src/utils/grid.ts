import { Grid } from "../types/Grid";


const incrementRowValues = (grid: Grid, rowNumber: number) => {
	const rowFound = grid[rowNumber];
	for (let cellIndex in rowFound) {
		rowFound[cellIndex]++;
	}
	return grid;
}

const incrementColumnValues = (grid: any, ignoreRow: number, column: number) => {
	for (let rowIndex in grid) {
		if (Number(rowIndex) !== ignoreRow) {
			const rowFound = grid[rowIndex];
			rowFound[column]++;
		}
	}

	return grid;
}


export const createGrid = (rows: number, columns: number) => {
	const grid: Grid = {};
	for (let i=0; i<rows; i++) {
		const column: {[index: number]: number} = {};
		for (let k=0; k<columns; k++) {
			column[k] = 1;
		}
		grid[i] = column;
	}

	return grid;
}

export const processCellClick = (grid: any, row: number, column: number) => {
	const updateRows = incrementRowValues(grid, row);
	const updateColumns = incrementColumnValues(updateRows, row, column);

	return updateColumns;
}

export const clearFibonacciCells = (grid: any, rowNumber: number, start: number, end: number) => {
	const rowFound = grid[rowNumber];
	let cell = 0;
	while (rowFound[cell] >= start && rowFound[cell] <= end + 1) {
		rowFound[cell] = 1;
		cell++;
	}


	return grid;
}