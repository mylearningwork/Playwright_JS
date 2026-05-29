function factorialIterative(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result = result * i;
    }

    return result;
}

function factorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorialRecursive(number - 1);
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
/*
How it works:
1. The iterative version multiplies numbers using a loop.
2. The recursive version calls itself with number - 1.
3. The recursion stops when the number reaches 0 or 1.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
