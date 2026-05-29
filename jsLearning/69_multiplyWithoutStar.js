function multiply(first, second) {
    let result = 0;
    const isNegative = (first < 0) !== (second < 0);
    const count = Math.abs(second);
    const value = Math.abs(first);

    for (let i = 1; i <= count; i++) {
        result += value;
    }

    return isNegative ? -result : result;
}

console.log(multiply(6, 4));
console.log(multiply(-6, 4));
/*
How it works:
1. The function adds one number repeatedly instead of using multiplication.
2. The sign is calculated separately.
3. The final result is negated if exactly one input was negative.
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
