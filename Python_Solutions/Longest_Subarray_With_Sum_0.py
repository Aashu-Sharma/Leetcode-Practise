nums, k = [2, -1, 4, 0, 3], 3

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

    sum_map = {}
    current_sum = 0
    for i in range(len(nums)):
        current_sum += nums[i]
        if (current_sum == k):
            max_length = max(max_length, i + 1)
        diff = current_sum - k
        if diff in sum_map:
            max_length = max(max_length, i - sum_map[diff])
        if not current_sum in sum_map:
            sum_map[current_sum] = i
    return max_length
        

print(longest_subarray_with_sum_k(nums, k))