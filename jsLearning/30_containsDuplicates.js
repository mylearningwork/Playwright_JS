function containsDuplicates(numbers) {
    return new Set(numbers).size !== numbers.length;
}

console.log(containsDuplicates([1, 2, 3, 2]));
console.log(containsDuplicates([1, 2, 3, 4]));
