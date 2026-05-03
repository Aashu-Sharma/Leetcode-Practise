nums, k = [4, 2, 2, 6, 4], 6

def count_subarray_with_given_xor_k(nums, k):
    count = 0
    # for i in range(len(nums)):
    #     curr_sum = 0
    #     subarray = []
    #     for j in range(i, len(nums)):
    #         curr_sum ^= nums[j]
    #         subarray.append(nums[j])
    #         if curr_sum == k:
    #             count+=1
    #             print(subarray, count)
    #         else:
    #             print(subarray)

    pre_sum_map = {0: 1}
    curr_xor_sum = 0
    for i in range(len(nums)):
        curr_xor_sum ^= nums[i]
        
        diff = curr_xor_sum ^ k
        print(diff)

        if diff in pre_sum_map:
            count += pre_sum_map[diff]

        pre_sum_map[curr_xor_sum] = pre_sum_map.get(curr_xor_sum, 0) + 1
        
        print(pre_sum_map, count)

    return count

print(count_subarray_with_given_xor_k(nums, k))