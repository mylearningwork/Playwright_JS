function longestWord(sentence) {
    const words = sentence.split(/\s+/);
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord('JavaScript makes automation powerful'));
/*
How it works:
1. The sentence is split into words.
2. The loop compares each word length with the current longest word.
3. The longest word found is returned.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. split() breaks a string into an array.
2. A for loop repeats logic for every index or value.
3. The \s regular expression token matches whitespace.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
