let arr = [5,4,1,7,3];

function bubbleSort(arr){
    for (let i = arr.length - 1; i >= 1 ; i--) {
        let swapped = 0;
        for (let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = 1;
            }
        }
        if(swapped == 0){
            break;
        }
        console.log("swapped");
    }
    return arr;
}  
console.log(bubbleSort(arr));