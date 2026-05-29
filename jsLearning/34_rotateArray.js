function rotateArray(numbers, positions) {
    const rotateBy = positions % numbers.length;
    return [...numbers.slice(-rotateBy), ...numbers.slice(0, -rotateBy)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
/*
How it works:
1. positions % numbers.length handles rotation values larger than the array size.
2. slice(-rotateBy) takes the last values that move to the front.
3. slice(0, -rotateBy) keeps the remaining values after them.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. slice() copies part of an array or string without changing the original.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
