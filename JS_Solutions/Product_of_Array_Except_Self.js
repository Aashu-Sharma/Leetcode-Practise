let nums = [1, 2, 3, 4];

// function productExceptSelf(nums) {
//     let result = [];
//     let prefix = 1, suffix = 1;
//     let prefix_arrray = [];
//     let suffix_array = [];

//     for (let i = 0; i < nums.length; i++) {
//         prefix_arrray[i] = prefix;
//         prefix = prefix * nums[i];
//         console.log("Prefix: ", prefix);
//     }
//     console.log(prefix_arrray);    

//     for (let i = nums.length - 1; i >= 0; i--) {
//         suffix_array[i] = suffix;
//         suffix = suffix * nums[i];
//         console.log("Suffix: ", suffix);
//     }

//     console.log(suffix_array);
    
//     for (let i = 0; i < nums.length; i++) {
//        result.push(prefix_arrray[i] * suffix_array[i]);
//     }

//     console.log(result);
// }

// productExceptSelf(nums);


// another approach which is much more optimized in terms of space;

function productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1);
    let prefix = 1, suffix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix = suffix * nums[i]
    }

    return result;
}

console.log(productExceptSelf(nums));