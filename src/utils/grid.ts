import { Cell } from "../types/Cell";
import { Row } from "../types/Row";

export class FibonacciGrid {
	rows: number;
	columns: number;
	grid: {[index: number]: {}} = {};
	constructor (rows: number, columns: number) {
		console.log('creates Grid class');
		this.rows = rows;
		this.columns = columns;
		this.grid = this.createGrid();
	}

	createGrid() {
		const grid: {[index: number]: {}}= {};
		for (let i=0; i<this.rows; i++) {
			const column: {[index: number]: number} = {};
			for (let k=0; k<this.columns; k++) {
				column[k] = 0;
			}
			grid[i] = column;
		}

		return grid;
	}

	getGrid() {
		return this.grid;
	}

	getRows() {
		return Object.values(this.grid);
	}

	incrementRowValues(row: number) {
		const rowFound: Cell = this.grid[row];
		console.log('rowFound', rowFound)
		for (let cellIndex in rowFound) {
			rowFound[cellIndex]++;
		}
	}

	processCellClick(row: number, column: number) {
		this.incrementRowValues(row);
		return this.grid;
	}

}

const incrementRowValues = (grid: any, row: number) => {
	const rowFound = grid[row];
	console.log('rowFound', rowFound)
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
	const grid: Row = {};
	for (let i=0; i<rows; i++) {
		const column: {[index: number]: number} = {};
		for (let k=0; k<columns; k++) {
			column[k] = 0;
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