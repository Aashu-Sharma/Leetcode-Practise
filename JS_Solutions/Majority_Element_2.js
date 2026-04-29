let nums = [3, 1, 3, 1, 3, 1, 3, 1, 2, 2];

function majority_element_two(nums) {
  // const freq_map = new Map();
  const output = [];
  // for(let i = 0; i < nums.length; i++){
  //     if(!freq_map.has(nums[i])){
  //         freq_map.set(nums[i], 1);
  //     }else{
  //         freq_map.set(nums[i], freq_map.get(nums[i]) + 1);
  //     }
  // }

  // for(const [key, value] of freq_map){
  //     if(value > Math.floor(nums.length/3)){
  //         output.push(key);
  //     }
  // };

  let elem1 = null;
  let elem2 = null;
  let count1 = 0;
  let count2 = 0;

  for (const num of nums) {
    if (elem1 === num) {
      count1++;
    } else if (elem2 === num) {
      count2++;
    } else if (count1 === 0) {
      elem1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      elem2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  let tcount1 = 0;
  let tcount2 = 0;

  for (const num of nums) {
    if (num === elem1) {
      tcount1++;
    }
    if (num === elem2) {
      tcount2++;
    }
  }

  if (tcount1 > Math.floor(nums.length / 3)) {
    output.push(elem1);
  }
  if (tcount2 > Math.floor(nums.length / 3)) {
    output.push(elem2);
  }

  return output;
}

console.log(majority_element_two(nums));
