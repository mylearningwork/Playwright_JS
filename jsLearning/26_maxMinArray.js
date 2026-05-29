function findMaxMin(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers),
    };
}

console.log(findMaxMin([8, 3, 12, 5, 1]));
/*
How it works:
1. Math.max(...numbers) finds the largest value in the array.
2. Math.min(...numbers) finds the smallest value in the array.
3. The function returns both values together in one object.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Math methods are used for numeric calculations.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
