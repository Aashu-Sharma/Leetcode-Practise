const nums = [5, 3, 1, 4, 2];

const InsertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};

console.log(InsertionSort(nums));