nums = [1, 2, 3]
k = 3

def count_subarray_with_sum_k(nums, target):

    # brute force approach
    # count = 0
    # for i in range(len(nums)):
    #     for j in range(i, len(nums)):
    #         curr_sum = 0
    #         subarray = []
    #         for k in range(i, j+1):
    #             curr_sum += nums[k]
    #             subarray.append(nums[k])
    #         print(subarray, curr_sum)
    #         if curr_sum == target:
    #             count += 1
    # return count

    curr_sum = 0
    pre_sum = {0:1}
    count = 0

    for i in range(len(nums)):
        curr_sum += nums[i]
        
        diff = curr_sum - target
        if diff in pre_sum:
            count+=pre_sum[diff]

        pre_sum[curr_sum] = pre_sum.get(curr_sum, 0) + 1
        
    print(pre_sum)
    return count

print(count_subarray_with_sum_k(nums, k))