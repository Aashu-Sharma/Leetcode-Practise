let nums = [100, 4, 200, 1, 3, 2]; //4
let nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let nums3 = [1, 0, 1, 2];

// const longestConsecutive = (nums) => {
//   let set = new Set();
//   let maxLen = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has(nums[i])) {
//       set.add(nums[i]);
//     }
//   }

//   for (const val of set) {
//     let prev = val - 1;
//     let start = 0;

//     if (!set.has(prev)) {
//       start = val;
//       let next = start + 1;
//       let count = 1;
//       while (set.has(next)) {
//         next++;
//         count++;
//       }

//       if (count > maxLen) {
//         maxLen = count;
//       }
//     }
//   }

//   return maxLen;
// };

const longestConsecutive = (nums) => {
  let set = new Set();
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    }
  }

  for (const val of set) {
    let prev = val - 1;
    if (!set.has(prev)) {
      let next = val + 1;
      let count = 1;
      while (set.has(next)) {
        next++;
        count++;
      }

      if (count > maxLen) {
        maxLen = count;
      }
    }
  }

  return maxLen;
};

console.log(longestConsecutive(nums2));
