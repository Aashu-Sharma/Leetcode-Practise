nums = [2,6,5,8,11]
target = 19

def two_sum(nums, target):
    # brute force approach
    # for i in range(len(nums)):
    #     for j in range(i+1, len(nums)):
    #         sum = nums[i] + nums[j]
    #         if sum == target:
    #             return True
    # return False

    # a slightly better appraoch
    # diff_set = set() #[2,6,5,8,11]
    # for i in range(len(nums)):
    #     diff = target - nums[i]
    #     if diff in diff_set:
    #         return True
    #     else:
    #         diff_set.add(nums[i])
    # return False

    # Trying to optimise it further
    right = len(nums) - 1
    left = 0
    while right > left:
        sum = nums[right] + nums[left]
        if sum == target:
            return True
        elif sum > target:
            right-=1
        else:
            left+=1
    return False



print(two_sum(nums, target))