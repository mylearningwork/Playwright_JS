function swapNumbers(first, second) {
    first = first + second;
    second = first - second;
    first = first - second;

    return [first, second];
}

console.log(swapNumbers(10, 20));
