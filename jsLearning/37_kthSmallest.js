function kthSmallest(numbers, k) {
    const sorted = [...numbers].sort((first, second) => first - second);
    return sorted[k - 1];
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
