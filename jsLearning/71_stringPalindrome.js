function isStringPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isStringPalindrome('Madam'));
console.log(isStringPalindrome('hello'));
/*
How it works:
1. The text is normalized to lowercase and non-alphanumeric characters are removed.
2. The cleaned string is reversed.
3. If original cleaned text equals reversed text, it is a palindrome.
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
4. replace() creates a new string by replacing matched text.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
