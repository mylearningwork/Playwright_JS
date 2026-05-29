function primaryDiagonalSum(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }

    return sum;
}

console.log(primaryDiagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
/*
How it works:
1. Primary diagonal elements have the same row and column index.
2. The loop reads matrix[i][i].
3. Each diagonal value is added to sum.
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
