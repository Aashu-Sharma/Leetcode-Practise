let nums = [-2,-1,-1,1,1,2,2]
let target = 0;

function four_sum(nums, target) {
  nums.sort((a, b) => a - b);
  let output = [];
  let i = 0;
  while (i < nums.length) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    let j = i + 1;
    while (j < nums.length) {
        if(j > i+1 && nums[j] === nums[j-1]){
            j++;
            continue;
        }
      let complement = target - (nums[j] + nums[i]);
      let right = nums.length - 1;
      let left = j + 1;
      while (right > left) {
        let sum_of_pointers = nums[left] + nums[right];
        if (sum_of_pointers === complement) {
          output.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--; 
          while(left < right && nums[left] === nums[left-1]){
            left++;
          }
          while(left < right && nums[right] === nums[right+1]){
            right--;
          }
        } else if (sum_of_pointers < complement) {
          left++;
        } else {
          right--;
        }
      }
      j++;
    }
    i++;
  }
  return output;
}

console.log(four_sum(nums, target));
