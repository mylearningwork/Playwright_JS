function isPerfectCube(number) {
    const cubeRoot = Math.cbrt(number);
    return Number.isInteger(cubeRoot);
}

console.log(isPerfectCube(27));
console.log(isPerfectCube(28));
