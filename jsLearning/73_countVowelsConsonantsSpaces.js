function countVowelsConsonantsSpaces(text) {
    const counts = {
        vowels: 0,
        consonants: 0,
        spaces: 0,
    };

    for (const char of text.toLowerCase()) {
        if (char === ' ') {
            counts.spaces++;
        } else if ('aeiou'.includes(char)) {
            counts.vowels++;
        } else if (char >= 'a' && char <= 'z') {
            counts.consonants++;
        }
    }

    return counts;
}

console.log(countVowelsConsonantsSpaces('Hello JavaScript World'));
/*
How it works:
1. The loop reads every character in lowercase.
2. Spaces, vowels, and consonants are counted separately.
3. Only alphabet letters are counted as consonants.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. includes() checks whether a value or substring exists.
2. A for loop repeats logic for every index or value.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
