nums, k = [2, 1, 3, 1, 0, 0], 4

def longest_subarray_with_sum_k(nums, k):
    max_length = 0
    # for a in range(len(nums)):
    #     print(a)
    #     for i in range(a, len(nums)):
    #         current_sum = 0
    #         for j in range(a, i+1):
    #             current_sum += nums[j]
    #         if current_sum == k:
    #             max_length = max(max_length, i - a + 1)
    #         print(current_sum, max_length)

    pre_sum_map = {}
    curr_sum = 0

    for i in range(len(nums)):
        curr_sum += nums[i]

        if curr_sum == k:
            max_length = max(max_length, i+1)
        
        diff = curr_sum - k

        if diff in pre_sum_map:
            max_length = max(max_length, i - pre_sum_map[diff])
        
        if not curr_sum in pre_sum_map:
            pre_sum_map[curr_sum] = i
    
    return max_length
        

print(longest_subarray_with_sum_k(nums, k))