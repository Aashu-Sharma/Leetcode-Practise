const nums = [5, 3, 1, 4, 2];

const InsertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while((j >= 0) && (arr[j] > key)){
            arr[j+1] = arr[j];
            j--;
        }
        
        arr[j+1] = key;
    }
    return arr;
};

console.log(InsertionSort(nums));