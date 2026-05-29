function moveZerosToEnd(numbers) {
    const nonZeros = numbers.filter((number) => number !== 0);
    const zeros = numbers.filter((number) => number === 0);

    return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12]));
/*
How it works:
1. One array keeps all non-zero values.
2. Another array keeps all zero values.
3. Both arrays are joined so zeros appear at the end.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. filter() creates a new array with only the values that pass a condition.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
