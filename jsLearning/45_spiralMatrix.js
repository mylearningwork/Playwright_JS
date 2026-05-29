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
/*
How it works:
1. Four boundaries track the current top, bottom, left, and right edges.
2. Values are collected across top, right side, bottom, and left side.
3. After each side is read, its boundary moves inward.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A for loop repeats logic for every index or value.
2. A while loop repeats until its condition becomes false.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
