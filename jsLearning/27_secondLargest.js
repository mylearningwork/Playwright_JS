function secondLargest(numbers) {
    const uniqueSorted = [...new Set(numbers)].sort((first, second) => second - first);
    return uniqueSorted[1];
}

console.log(secondLargest([10, 5, 20, 20, 8]));
