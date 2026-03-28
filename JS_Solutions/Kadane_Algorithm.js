let arr_of_nums = [2, 3, 5, -2, 7, -4];

function Maximum_Subarray_Sum(nums){
    // very naive brute force appraoch TC - n^3
    // let maxSum = 0; 
    // for(let i = 0; i < nums.length; i++){
    //     for (let j = i; j < nums.length; j++) {
    //         let sum = 0;
    //         for (let k = i; k < j + 1; k++) {
    //             sum += nums[k];
    //         }
    //         maxSum = Math.max(sum, maxSum)
    //     }
    // }
    // return maxSum;

    // a rather more optimal solution, TC - n^2
    // let maxSum = nums[0];
    // for (let i = 0; i < nums.length; i++) {
    //     let curr_sum = 0;
    //     for (let j = i; j < nums.length; j++) {
    //         curr_sum = curr_sum + nums[j]; 
    //         maxSum = Math.max(maxSum, curr_sum);
    //     }
    //     console.log(maxSum, curr_sum)
    // }
    // return maxSum

    let start = 0;
    let max_sum = nums[0];
    let curr_sum = 0;
    let end = Infinity;
    let tempstart = 0;

    for(let i = 0; i < nums.length; i++){
        if(curr_sum < 0){
            curr_sum = nums[i];
            max_Array.length = 0;
            tempstart = i;
        }else{
            curr_sum += nums[i];
        }

        if(curr_sum > max_sum){
            max_sum = curr_sum;
            start = tempstart;
            end = i;
        }
    }
    max_Array = nums.slice(start, end + 1)
    return [max_sum, max_Array];
}


console.log(Maximum_Subarray_Sum(arr_of_nums));

