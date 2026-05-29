function intersection(firstArray, secondArray) {
    const secondSet = new Set(secondArray);
    return [...new Set(firstArray)].filter((item) => secondSet.has(item));
}

console.log(intersection([1, 2, 2, 3, 4], [2, 4, 6]));
