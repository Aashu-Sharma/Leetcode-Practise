const nums = [7, 8, 9, 10, 11, 12];

const firstMissingPositive = (nums) => {
    let i = 0;
    while (i < nums.length) {
        if(nums[i] < 1 || nums[i] > nums.length){
            i++;
            continue; 
        }

        if(nums[nums[i] - 1] === nums[i]){
            i++;
            continue;
        };

        let currentVal = nums[i];
        let toBeRpeplaced = nums[currentVal - 1];

        nums[i] = toBeRpeplaced;
        nums[currentVal - 1] = currentVal;
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== i+1) return i+1;
    }

    return nums.length + 1;
};

console.log(firstMissingPositive(nums));