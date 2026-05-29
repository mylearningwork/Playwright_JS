function gcd(first, second) {
    let a = Math.abs(first);
    let b = Math.abs(second);

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

console.log(gcd(24, 36));
/*
How it works:
1. The Euclidean algorithm repeatedly divides and uses the remainder.
2. b becomes the new divisor and remainder becomes the new b.
3. When b becomes 0, a is the GCD.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Math methods are used for numeric calculations.
2. A while loop repeats until its condition becomes false.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
