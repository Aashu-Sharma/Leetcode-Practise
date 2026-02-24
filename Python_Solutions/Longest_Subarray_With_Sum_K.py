nums, k = [2, 1, 3, 1, 1, 1], 4 

def find_longest_subarray_with_sum_k(nums, k):
    i = 0
    j = 0
    max_len = 0
    sum_of_elem = nums[0]

    while j < len(nums):
        while sum_of_elem > k:
            sum_of_elem -= nums[i]
            i+=1
        
        if sum_of_elem == k: 
            max_len = max(max_len, (j - i) + 1)
        j+=1
        if j < len(nums):
            sum_of_elem += nums[j]

    return max_len

print(find_longest_subarray_with_sum_k(nums, k))