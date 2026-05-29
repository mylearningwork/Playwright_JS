function removeDuplicateCharacters(text) {
    return [...new Set(text)].join('');
}

console.log(removeDuplicateCharacters('programming'));
/*
How it works:
1. A Set keeps only unique characters.
2. The spread operator converts the Set back into an array.
3. join('') converts the characters into a string.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. Set is used to keep unique values or check membership quickly.
2. join() combines array items into one string.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
