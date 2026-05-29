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
/*
How it works:
1. Rows become columns in the transposed matrix.
2. The outer loop walks through original columns.
3. The inner loop collects values from each row for that column.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
