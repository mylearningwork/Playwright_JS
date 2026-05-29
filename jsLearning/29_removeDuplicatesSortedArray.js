function removeDuplicatesSorted(numbers) {
    const result = [];

    for (const number of numbers) {
        if (result[result.length - 1] !== number) {
            result.push(number);
        }
    }

    return result;
}

console.log(removeDuplicatesSorted([1, 1, 2, 2, 3, 4, 4]));
