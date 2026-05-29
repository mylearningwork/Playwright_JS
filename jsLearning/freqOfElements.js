
const nums = [3, 4, 5, 6, 4, 5, 6, 7, 6];

const frequency = {};

for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log(frequency);


function countChar(chars, charToSearch) {

    let count=0
    for(let i=0;i<chars.length;i ++) {

        if((chars.toLowerCase()[i]) === charToSearch) {
            count++
        }

    }

    return count;

}

console.log(countChar("AAAAAAAAAalokraiAlok","a"))