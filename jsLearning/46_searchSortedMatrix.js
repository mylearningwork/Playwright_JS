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
/*
How it works:
1. The search starts from the top-right corner.
2. If the current value is too large, move left.
3. If the current value is too small, move down.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A while loop repeats until its condition becomes false.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
