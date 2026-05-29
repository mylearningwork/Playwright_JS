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

function lcm(first, second) {
    if (first === 0 || second === 0) {
        return 0;
    }

    return Math.abs(first * second) / gcd(first, second);
}

console.log(lcm(12, 18));
/*
How it works:
1. The GCD is calculated first.
2. LCM uses the formula abs(first * second) / GCD.
3. If either number is 0, the LCM is 0.
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
