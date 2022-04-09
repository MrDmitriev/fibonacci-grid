const FIBONACCI_SEQUENCE_LIMIT = 5;


const isPerfectSquare = (x: number) => {
	let s = Math.floor(Math.sqrt(x));
	return (s * s === x);
}

const isFibonacci = (n: number) => {
	if (n <= 0) {
		return false;
	}
	// n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
	// is a perfect square
	return isPerfectSquare((5 * n * n) + 4) || isPerfectSquare((5 * n * n) - 4);
}

export const findFibonacciSequence = (arr: number[]) => {
	let startFibo = 0;
	let endFibo = 0;
	let sequenceCount = 0;

	for (let i=0; i<arr.length; i++) {
		const current = arr[i];

		const isFibo = isFibonacci(current);
		
		
		if (isFibo) {
			sequenceCount++;
		}

		if (!isFibo) {
			sequenceCount = 0;
		}

		if (sequenceCount === 5) {
			endFibo = i;
			startFibo = (i - 5) < 0 ? 0 : i - 5;
			break;
		}
	}
	
	return [startFibo, endFibo];
}
