function kthLargest(numbers, k) {
    const sorted = [...numbers].sort((first, second) => second - first);
    return sorted[k - 1];
}

console.log(kthLargest([7, 10, 4, 3, 20, 15], 3));
