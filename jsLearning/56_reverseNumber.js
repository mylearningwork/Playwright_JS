function reverseNumber(number) {
    const sign = number < 0 ? -1 : 1;
    const reversed = Math.abs(number).toString().split('').reverse().join('');

    return sign * Number(reversed);
}

console.log(reverseNumber(12345));
/*
How it works:
1. The sign is saved so negative numbers stay negative.
2. The absolute number is converted to a string and reversed.
3. The reversed string is converted back to a number.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. reverse() changes the order of items from last to first.
2. join() combines array items into one string.
3. split() breaks a string into an array.
4. Math methods are used for numeric calculations.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
