function factorial(num) {
    let newNum = 1;

    for (let i = 1; i <= num; i++) {
        newNum = newNum * i;
    }

    return newNum;
}


function factorial2(num) {

if(num === 0 || num===1) return 1;
    return num*factorial2(num-1);

}

console.log(factorial(5));
console.log(factorial2(5));
