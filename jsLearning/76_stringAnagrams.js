function areAnagrams(first, second) {
    const normalize = (text) => text.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return normalize(first) === normalize(second);
}

console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('hello', 'world'));
