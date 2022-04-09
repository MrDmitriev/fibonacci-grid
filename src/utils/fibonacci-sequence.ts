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
	let startFibo = null;
	let endFibo = null;
	let sequenceCount = 0;

	for (let i=0; i<arr.length; i++) {
		const current = arr[i];
		const prePrev = arr[i-2] || 0;
		const prev = arr[i-1] || 0;
		const next = arr[i+1] || 0;
		const nextNext = arr[i+2] || 0;

		let isFibo = false;
		if (i === 0) {
			isFibo = isFibonacci(current);
			sequenceCount++;
			
		} else if (i < arr.length - 2) {
			isFibo = isFibonacci(current) && ((nextNext - next) === current || (prePrev + prev) === current);
			sequenceCount++;
		} else {
			isFibo = isFibonacci(current) && (prePrev + prev) === current;
			sequenceCount++;
		}
		
		if (isFibo && typeof startFibo !== 'number') {
			startFibo = i;
		}

		if (!isFibo && typeof endFibo !== 'number') {
			sequenceCount = 0;
			startFibo = null;
		}

		if (sequenceCount === 5) {
			endFibo = i;
			break;
		}
	}

	if ( typeof startFibo === 'number' && typeof endFibo === 'number') {
		const difference = endFibo - startFibo + 1;
		return difference === FIBONACCI_SEQUENCE_LIMIT ? [startFibo, endFibo] : [0, 0];
	}
	
	return [0, 0];
}
