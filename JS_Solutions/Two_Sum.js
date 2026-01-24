let nums = [3, 4, 6, 5, 7, 8];
// const twoSum = function (nums, target) {
//     const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if (sum === target) {
//         //   console.log(i,j);
//           result.push([i, j]);
//       }
//     }
//   }
//   return result;
// }; // basic approach



// console.log(twoSum(nums, 9))

// const twoSum = (nums, target) => {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
// };

// [3, 4, 6, 5, 7, 8];
const twoSum = (arr, target) => {
    const map = new Map();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if(map.has(complement)){
            result.push([map.get(complement), i]) ;
        }
        map.set(arr[i], i)
    }
    return result;
}

console.log(twoSum(nums, 9));