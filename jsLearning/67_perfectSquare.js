function isPerfectSquare(number) {
    if (number < 0) {
        return false;
    }

    const root = Math.sqrt(number);
    return Number.isInteger(root);
}

console.log(isPerfectSquare(49));
console.log(isPerfectSquare(50));
/*
How it works:
1. Negative numbers cannot be perfect squares.
2. Math.sqrt() finds the square root.
3. If the root is an integer, the number is a perfect square.
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
