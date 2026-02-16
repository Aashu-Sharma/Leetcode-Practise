nums = [1,2,3,4,5,6,7]
k = 3

def rotate_the_array_by_k_elems(nums, k):
    # if k == 0:
    #     return
    # temp = nums[-1]
    # for i in range(len(nums) - 1, 0, -1):
    #     nums[i] = nums[i-1]

    # nums[0] = temp
    # rotate_the_array_by_k_elems(nums, k-1)
    # return nums

    # for _ in range(k):
    #     temp = nums[-1]
    #     for i in range(len(nums) - 1, 0, -1):
    #         nums[i] = nums[i-1]
    #     nums[0] = temp
    # return nums

    nums[:] = nums[-k:] + nums[:-k]
    return nums





print(rotate_the_array_by_k_elems(nums, k))
