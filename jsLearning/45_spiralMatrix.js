function spiralOrder(matrix) {
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let column = left; column <= right; column++) result.push(matrix[top][column]);
        top++;

        for (let row = top; row <= bottom; row++) result.push(matrix[row][right]);
        right--;

        if (top <= bottom) {
            for (let column = right; column >= left; column--) result.push(matrix[bottom][column]);
            bottom--;
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) result.push(matrix[row][left]);
            left++;
        }
    }

    return result;
}

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
