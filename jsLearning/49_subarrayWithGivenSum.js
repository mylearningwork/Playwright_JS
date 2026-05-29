function subarrayWithGivenSum(numbers, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < numbers.length; end++) {
        currentSum += numbers[end];

        while (currentSum > target && start <= end) {
            currentSum -= numbers[start];
            start++;
        }

        if (currentSum === target) {
            return numbers.slice(start, end + 1);
        }
    }

    return [];
}

console.log(subarrayWithGivenSum([1, 4, 20, 3, 10, 5], 33));
