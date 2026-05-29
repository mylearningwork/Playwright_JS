function countDigits(number) {
    return Math.abs(number).toString().length;
}

console.log(countDigits(12345));
/*
How it works:
1. The absolute value handles negative numbers.
2. The number is converted to a string.
3. The string length gives the digit count.
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
