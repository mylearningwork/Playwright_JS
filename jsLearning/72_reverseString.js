function reverseString(text) {
    return text.split('').reverse().join('');
}

console.log(reverseString('JavaScript'));
/*
How it works:
1. split('') converts the string into characters.
2. reverse() reverses the character array.
3. join('') turns the array back into a string.
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

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
