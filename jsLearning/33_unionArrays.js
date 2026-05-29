function union(firstArray, secondArray) {
    return [...new Set([...firstArray, ...secondArray])];
}

console.log(union([1, 2, 3], [3, 4, 5]));
/*
How it works:
1. Both arrays are combined with the spread operator.
2. new Set() removes duplicate values.
3. The Set is converted back into an array.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
