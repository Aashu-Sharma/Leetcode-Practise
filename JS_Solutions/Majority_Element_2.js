let nums = [1,2]

function majority_element_two(nums){
    const freq_map = new Map();
    const output = [];
    for(let i = 0; i < nums.length; i++){
        if(!freq_map.has(nums[i])){
            freq_map.set(nums[i], 1);
        }else{
            freq_map.set(nums[i], freq_map.get(nums[i]) + 1);
        }
    }

    for(const [key, value] of freq_map){
        if(value > Math.floor(nums.length/3)){
            output.push(key);
        }
    };
    return output;
};

console.log(majority_element_two(nums));