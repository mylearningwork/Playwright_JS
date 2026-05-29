function mergeSortedArrays(firstArray, secondArray) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] <= secondArray[j]) {
            merged.push(firstArray[i]);
            i++;
        } else {
            merged.push(secondArray[j]);
            j++;
        }
    }

    return [...merged, ...firstArray.slice(i), ...secondArray.slice(j)];
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
