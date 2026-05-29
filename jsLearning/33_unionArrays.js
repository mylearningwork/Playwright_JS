function union(firstArray, secondArray) {
    return [...new Set([...firstArray, ...secondArray])];
}

console.log(union([1, 2, 3], [3, 4, 5]));
