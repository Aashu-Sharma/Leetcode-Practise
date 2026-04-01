nums = [5, 1, 1]

# 1, 2, 3
# 1, 3, 2
# 2, 1, 3
# 2, 3, 1
# 3, 1, 2
# 3, 2, 1 

def nextPermutation(nums):
    i = len(nums) - 2

    while(i >= 0 and nums[i] >= nums[i+1]):
        i-=1
        
    j = len(nums) - 1
    while (j > i and nums[j] <= nums[i]):
        j-=1

    if(i < j and i >= 0):
        nums[i], nums[j] = nums[j], nums[i]
    
    print(i, j)
    
    left = i+1
    right = len(nums) - 1

    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left+=1
        right-=1

    return nums
        


print(nextPermutation(nums))