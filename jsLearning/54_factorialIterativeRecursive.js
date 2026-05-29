function factorialIterative(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result = result * i;
    }

    return result;
}

function factorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorialRecursive(number - 1);
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
