nums = [1, 2, 3, 4, 5 ]

def isSortedAndRotated(lst):
    count = 0
    for i in range(len(lst)):
        print(i, i+1)
        if nums[i] > nums[(i+1) % len(nums)]:
            count+=1

    if count <= 1:
        return True
    return False

print(isSortedAndRotated(nums))