function permutations(text) {
    if (text.length <= 1) {
        return [text];
    }

    const result = [];

    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i];
        const remaining = text.slice(0, i) + text.slice(i + 1);

        for (const permutation of permutations(remaining)) {
            result.push(currentChar + permutation);
        }
    }

    return result;
}

console.log(permutations('abc'));
/*
How it works:
1. The base case returns the string itself when length is 1 or less.
2. Each character is fixed once at the front.
3. Permutations of the remaining characters are appended recursively.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. slice() copies part of an array or string without changing the original.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
