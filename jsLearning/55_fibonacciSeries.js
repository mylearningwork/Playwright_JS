function fibonacciSeries(terms) {
    const series = [];

    for (let i = 0; i < terms; i++) {
        if (i < 2) {
            series.push(i);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }

    return series;
}

console.log(fibonacciSeries(10));
