nums = [1, 0, 2, 1, 0, 2, 2, 1, 0]

def sort_array(nums):
    # count_0 = 0
    # count_1 = 0
    # count_2 = 0

    # for num in nums:
    #     if num == 0:
    #         count_0 += 1 
    #     elif num == 1:
    #         count_1 += 1
    #     else: 
    #         count_2 += 1

    # for i in range(count_0):
    #     nums[i] = 0
    # for j in range(count_1):
    #     nums[j + count_0] = 1
    # for k in range(count_2):
    #     nums[k + count_1 + count_0] = 2
    # return nums

    # Dutch National Flag Algorithm
    low = 0
    mid = 0
    high = len(nums) - 1

    while mid <= high:
        if nums[mid] == 0:
            nums[mid], nums[low] = nums[low], nums[mid]
            mid+=1
            low+=1
        if nums[mid] == 1:
            mid+=1
        if nums[mid] == 2:
            nums[mid], nums[high] = nums[high], nums[mid]
            high-=1
    return nums

    

print(sort_array(nums))

# Dutch National Flag Algorithm

# there are three pointers low, mid and high to move through the array. 
# the array will be divided into three sections: 
# 1. The first will range from 0 to low - 1 and will contain only 0s. 
# 2. The second will range from low to mid - 1 and will contain only 1s. 
# 3. The third will range from mid to high and will contain random set of numbers. 
# 4. The fourth will range from high + 1 to n - 1 and will contain only 2s.