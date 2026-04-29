nums = [3, 2, 4]
target = 6


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

    # enumerate gives you access to both the index and value of the iterable.
    nums_with_index = [(i, num) for i, num in enumerate(nums)]
    # for i in range(len(nums)):
    #     nums_with_index.append((i, nums[i]))

    nums_with_index.sort(key=lambda x: x[1])
    # by default sort method sorts by the 1st element on tuples, so we need key to tell the method what to sort by
    # nums_with_index.sort()
    print(nums_with_index)

    right = len(nums) - 1
    left = 0
    while right > left:
        sum = nums_with_index[right][-1] + nums_with_index[left][-1]
        if sum == target:
            return [nums_with_index[left][0], nums_with_index[right][0]]
        elif sum > target:
            right-=1
        else:
            left+=1
    return [-1, 1];


print(two_sum(nums, target))
