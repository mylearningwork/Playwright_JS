function decimalToBinary(number) {
    if (number === 0) {
        return '0';
    }

    let quotient = Math.abs(number);
    let binary = '';

    while (quotient > 0) {
        binary = (quotient % 2) + binary;
        quotient = Math.floor(quotient / 2);
    }

    return number < 0 ? `-${binary}` : binary;
}

console.log(decimalToBinary(25));
/*
How it works:
1. The decimal number is repeatedly divided by 2.
2. Each remainder becomes one binary digit.
3. Digits are added from right to left to build the binary string.
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
