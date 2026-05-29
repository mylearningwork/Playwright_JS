function areAnagrams(first, second) {
    const normalize = (text) => text.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return normalize(first) === normalize(second);
}

console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('hello', 'world'));
/*
How it works:
1. Both strings are normalized by removing spaces and sorting characters.
2. Anagrams have the same sorted character sequence.
3. The function compares the normalized strings.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. sort() arranges array values based on the comparison logic.
2. join() combines array items into one string.
3. split() breaks a string into an array.
4. replace() creates a new string by replacing matched text.
5. The \s regular expression token matches whitespace.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
