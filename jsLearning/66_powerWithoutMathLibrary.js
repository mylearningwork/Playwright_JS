function calculatePower(base, exponent) {
    let result = 1;

    for (let i = 1; i <= Math.abs(exponent); i++) {
        result = result * base;
    }

    return exponent < 0 ? 1 / result : result;
}

console.log(calculatePower(2, 5));
/*
How it works:
1. The result starts at 1.
2. The base is multiplied repeatedly for the exponent count.
3. For negative exponents, the reciprocal 1 / result is returned.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Math methods are used for numeric calculations.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
