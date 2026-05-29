const array = [11, 2, 32, 4, 5];

function sortArray(array) {

    return array.sort((a, b) => a - b, 0)
}

console.log(sortArray(array));

function newSort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {  //   if (array[i] < array[j]) { reverse order

                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;


            }

        }


    }
    return array;

}
console.log(newSort([3331, 20, 3, 0,499, 5]));