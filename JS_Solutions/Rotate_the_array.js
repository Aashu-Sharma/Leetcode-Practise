let nums = [1, 2, 3, 4, 5, 6, 7]

function rotate_the_array_by_k_elems(nums, k){
    k = k % nums.length;

    const lastK = nums.slice(-k)
    const rest = nums.slice(0, -k)
    return [...lastK, ...rest]
}

console.log(rotate_the_array_by_k_elems(nums, 3))
// console.log(nums.slice())