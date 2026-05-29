function isSubstring(text, searchText) {
    return text.includes(searchText);
}

console.log(isSubstring('JavaScript automation', 'script'));
console.log(isSubstring('JavaScript automation', 'Script'));
/*
How it works:
1. includes() checks whether searchText exists inside text.
2. It returns true if found.
3. It is case-sensitive.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. includes() checks whether a value or substring exists.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
