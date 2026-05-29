function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

console.log(countWords('JavaScript is easy to practice'));
/*
How it works:
1. trim() removes outer spaces.
2. split(/\s+/) separates words by one or more whitespace characters.
3. filter(Boolean) removes empty values before counting.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. filter() creates a new array with only the values that pass a condition.
2. split() breaks a string into an array.
3. The \s regular expression token matches whitespace.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
