
const arr = [1, 2, 3, 4, 5,5,6 ,6];


console.log([...new Set(arr)]);

let uniqueArr=[]

for(let item of arr){

    if(!uniqueArr.includes(item)){
        uniqueArr.push(item)
    }

}

console.log(uniqueArr);