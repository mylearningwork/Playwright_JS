function firstNonRepeatingCharacter(text) {
    const frequency = {};

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (const char of text) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter('swiss'));
/*
How it works:
1. The first loop counts all characters.
2. The second loop checks characters in original order.
3. The first character with count 1 is returned.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
