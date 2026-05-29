function transposeMatrix(matrix) {
    const result = [];

    for (let column = 0; column < matrix[0].length; column++) {
        const rowValues = [];

        for (let row = 0; row < matrix.length; row++) {
            rowValues.push(matrix[row][column]);
        }

        result.push(rowValues);
    }

    return result;
}

console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
]));
