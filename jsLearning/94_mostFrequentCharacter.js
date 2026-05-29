function mostFrequentCharacter(text) {
    const frequency = {};
    let bestChar = null;
    let bestCount = 0;

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;

        if (frequency[char] > bestCount) {
            bestChar = char;
            bestCount = frequency[char];
        }
    }

    return {
        character: bestChar,
        count: bestCount,
    };
}

console.log(mostFrequentCharacter('javascript'));
/*
How it works:
1. The object stores character counts.
2. After each update, the current count is compared with the best count.
3. The most frequent character and its count are returned.
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
