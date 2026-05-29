function findMaxMin(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers),
    };
}

console.log(findMaxMin([8, 3, 12, 5, 1]));
