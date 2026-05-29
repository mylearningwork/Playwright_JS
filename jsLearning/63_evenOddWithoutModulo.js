function isEven(number) {
    return Math.floor(number / 2) * 2 === number;
}

console.log(isEven(10) ? 'Even' : 'Odd');
console.log(isEven(7) ? 'Even' : 'Odd');
/*
How it works:
1. The number is divided by 2 and rounded down.
2. Multiplying that value by 2 recreates the original only for even numbers.
3. The result tells whether the number is even or odd.
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
