function longestPalindromeSubstring(text) {
    let longest = '';

    function expandFromCenter(left, right) {
        while (left >= 0 && right < text.length && text[left] === text[right]) {
            left--;
            right++;
        }

        return text.slice(left + 1, right);
    }

    for (let i = 0; i < text.length; i++) {
        const oddPalindrome = expandFromCenter(i, i);
        const evenPalindrome = expandFromCenter(i, i + 1);
        const larger = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;

        if (larger.length > longest.length) {
            longest = larger;
        }
    }

    return longest;
}

console.log(longestPalindromeSubstring('babad'));
/*
How it works:
1. Each index is treated as a possible palindrome center.
2. The helper expands left and right while characters match.
3. The longest palindrome found during expansion is saved.
Detailed execution flow:
1. The sample console.log() at the bottom calls the function with demo input.
2. JavaScript enters the function and runs each statement from top to bottom.
3. Helper variables such as arrays, objects, counters, or Sets store intermediate values.
4. The return statement sends the final answer back to the caller.
5. console.log() prints that returned answer so you can verify the result.

Key JavaScript concepts used:
1. slice() copies part of an array or string without changing the original.
2. A for loop repeats logic for every index or value.
3. A while loop repeats until its condition becomes false.

Try it yourself:
1. Change the input inside console.log().
2. Run this file with node to compare the new output.
*/
