function removeSpecialCharacters(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
}

console.log(removeSpecialCharacters('Hello@ JavaScript# 123!'));
/*
How it works:
1. The regular expression keeps only letters, digits, and spaces.
2. Characters outside that pattern are matched.
3. replace() removes those matched special characters.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. replace() creates a new string by replacing matched text.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
