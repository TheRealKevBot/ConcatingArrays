// Create a function that concatenates n input arrays, where n is variable.

function concat(...args) {
	
} 

console.log(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1, 2], [3, 4]), [1, 2, 3, 4])
console.log(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4])
console.log(concat(['a'], ['b', 'c']), ['a', 'b', 'c'])