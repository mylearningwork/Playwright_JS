function leadersInArray(numbers) {
    const leaders = [];
    let maxFromRight = -Infinity;

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] > maxFromRight) {
            leaders.push(numbers[i]);
            maxFromRight = numbers[i];
        }
    }

    return leaders.reverse();
}

console.log(leadersInArray([16, 17, 4, 3, 5, 2]));
