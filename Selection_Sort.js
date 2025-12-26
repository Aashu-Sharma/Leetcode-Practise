let nums = [7, 4, 1, 5, 3];

function selectionSort(nums) {
    for(let i = 0; i < nums.length; i++){
        let min = i;
        for (let j = i; j < nums.length; j++) {
            if(nums[j] < nums[min]){
                min = j;
            }
        }
        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
        console.log(nums);
    }
}

console.log(selectionSort(nums));
