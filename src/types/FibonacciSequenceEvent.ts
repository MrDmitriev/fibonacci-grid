export type FibonacciSequenceEvent = {
	[index: string]: {
		rowNumber: number;
		start: number;
		end: number;
	}
}