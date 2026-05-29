function isNumberPalindrome(number) {
    const original = Math.abs(number).toString();
    const reversed = original.split('').reverse().join('');

    return original === reversed;
}

console.log(isNumberPalindrome(121));
console.log(isNumberPalindrome(123));
/*
How it works:
1. The number is converted to a string.
2. The string is reversed and compared with the original.
3. If both are same, the number is a palindrome.
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
