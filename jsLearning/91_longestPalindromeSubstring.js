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
