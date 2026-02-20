nums = [1, 1, 0, 0, 0, 1, 1, 1]

def find_maximum_consecutive_one(nums):
    max_cons = 0
    pos = 0

    for i in range(len(nums)):
        if nums[i] == 1:
            pos += 1
        else:
            pos = 0

        max_cons = max(max_cons, pos)
    return max_cons
        



print(find_maximum_consecutive_one(nums))