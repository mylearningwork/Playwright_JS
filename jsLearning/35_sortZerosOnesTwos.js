function sortZerosOnesTwos(numbers) {
    let zeros = 0;
    let ones = 0;
    let twos = 0;

    for (const number of numbers) {
        if (number === 0) zeros++;
        if (number === 1) ones++;
        if (number === 2) twos++;
    }

    return [
        ...Array(zeros).fill(0),
        ...Array(ones).fill(1),
        ...Array(twos).fill(2),
    ];
}

console.log(sortZerosOnesTwos([0, 2, 1, 2, 0, 1, 0]));
