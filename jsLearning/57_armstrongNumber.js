function isArmstrongNumber(number) {
    const digits = Math.abs(number).toString().split('');
    const power = digits.length;
    const sum = digits.reduce((total, digit) => total + Number(digit) ** power, 0);

    return sum === number;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(123));
/*
How it works:
1. The number is split into digits.
2. Each digit is raised to the power of total digit count.
3. If the sum equals the original number, it is an Armstrong number.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. reduce() combines array values into one final result, such as a sum or count.
2. split() breaks a string into an array.
3. Math methods are used for numeric calculations.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
