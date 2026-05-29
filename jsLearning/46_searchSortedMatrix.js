function searchSortedMatrix(matrix, target) {
    let row = 0;
    let column = matrix[0].length - 1;

    while (row < matrix.length && column >= 0) {
        if (matrix[row][column] === target) {
            return true;
        }

        if (matrix[row][column] > target) {
            column--;
        } else {
            row++;
        }
    }

    return false;
}

console.log(searchSortedMatrix([
    [10, 20, 30],
    [15, 25, 35],
    [27, 29, 37],
], 29));
