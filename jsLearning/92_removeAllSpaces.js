function removeAllSpaces(text) {
    return text.replace(/\s/g, '');
}

console.log(removeAllSpaces('JavaScript is easy'));
/*
How it works:
1. The regular expression /\s/g matches all whitespace characters.
2. replace() changes every whitespace match to an empty string.
3. The returned string has spaces, tabs, and new lines removed.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. replace() creates a new string by replacing matched text.
2. The \s regular expression token matches whitespace.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
