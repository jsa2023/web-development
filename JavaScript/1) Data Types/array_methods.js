let arr = [18, -2, 5, 34, 26, 2, 19, 75, 98, 21];
//console.log(arr.length);

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        //console.log(arr);
    }

    console.log(arr);
}

//bubbleSort(arr);

arr.sort((a,b) => a - b); // sort ascending
arr.sort((a,b) => b - a); // sort descending
arr.pop(); // remove element from last index and returns it

console.log(arr);