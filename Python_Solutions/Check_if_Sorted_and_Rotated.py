nums = [3, 4, 5, 1, 2, 1]

def isSortedAndRotated(lst):
    count = 0
    for i in range(len(lst) - 1):
        print(i, i+1)
        if nums[i] > nums[(i+1) % len(nums)]:
            count+=1

    if count <= 1:
        return True
    return False

print(isSortedAndRotated(nums))