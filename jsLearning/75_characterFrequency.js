function characterFrequency(text) {
    const frequency = {};

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

console.log(characterFrequency('hello'));
/*
How it works:
1. An object stores each character as a key.
2. The count starts from 0 if the character is new.
3. Each occurrence increases the count by 1.
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
