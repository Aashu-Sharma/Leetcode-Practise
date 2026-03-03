let arr = [2, 1, 3, 1, 0, 0];
let k = 4;

function longest_subarray_with_sum_k(nums, k) {
  // brute force
  // let maxLen = 0
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i; j < nums.length; j++) {
  //         let sum = 0
  //         for (let k = i; k < j + 1; k++){
  //             sum += nums[k]
  //         }
  //         if (sum === k){
  //             maxLen = Math.max(maxLen, (j - i) + 1)
  //         }
  //     }
  // }
  // return maxLen

  // better appraoch - using prefix sum and hashmap
  //   optimal as well in case array contains negative elements as well
  // let maxLen = 0;
  // let pre_sum_map = new Map();
  // let current_sum = 0;

  // for (let i = 0; i < nums.length; i++) {
  //     current_sum += nums[i]

  //     if (current_sum === k){
  //         maxLen = Math.max(maxLen, i + 1)
  //     }

  //     let diff = current_sum - k

  //     if(pre_sum_map.has(diff)){
  //         maxLen = Math.max(maxLen, i - pre_sum_map.get(diff))
  //     }

  //     if(!pre_sum_map.has(current_sum)){
  //         pre_sum_map.set(current_sum, i)
  //     }
  // }
  // return maxLen;

  // optimal approach - using two pointers
  //  in case array contains only positives and zeroes
  let i = 0;
  let j = 0;
  let maxLen = 0;
  let current_sum = nums[0];

  while (j < nums.length) {
    console.log(current_sum, j, maxLen);

    while (current_sum > k) {
      current_sum -= nums[i]; // [2, 1, 3, 1, 0, 0]
      i++;
    }
    // current_sum += nums[j + 1];
    if (current_sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }

    if (j < nums.length) {
      j++;
      current_sum += nums[j];
    }
  }
  return maxLen;
}

console.log(longest_subarray_with_sum_k(arr, k));
