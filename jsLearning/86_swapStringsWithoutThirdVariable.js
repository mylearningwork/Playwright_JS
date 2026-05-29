function swapStrings(first, second) {
    first = first + second;
    second = first.slice(0, first.length - second.length);
    first = first.slice(second.length);

    return [first, second];
}

console.log(swapStrings('hello', 'world'));
