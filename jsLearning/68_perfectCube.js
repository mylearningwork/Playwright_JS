function isPerfectCube(number) {
    const cubeRoot = Math.cbrt(number);
    return Number.isInteger(cubeRoot);
}

console.log(isPerfectCube(27));
console.log(isPerfectCube(28));
/*
How it works:
1. Math.cbrt() finds the cube root.
2. A number is a perfect cube if its cube root is an integer.
3. This also works for negative perfect cubes.
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
