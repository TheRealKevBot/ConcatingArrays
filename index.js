// Create a function that concatenates n input arrays, where n is variable.

function concat(...args) {
    newArr = []
    args.forEach(sub => {
        newArr.length === 0 ? newArr = sub : newArr = newArr.concat(sub)
    })
    return newArr
} 

console.log(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1, 2], [3, 4]), [1, 2, 3, 4])
console.log(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4])
console.log(concat(['a'], ['b', 'c']), ['a', 'b', 'c'])