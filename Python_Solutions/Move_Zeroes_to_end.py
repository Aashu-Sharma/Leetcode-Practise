nums = [0,1,0,3,12]

def move_zeroes_at_the_end(nums):
    # new_array = []
    # rest = []
    # i = 0
    # while i < len(nums):
    #     if nums[i] > 0:
    #         new_array.append(nums[i])
    #     else:
    #         rest.append(nums[i])
    #     i+=1
    # nums[:] = new_array + rest
    # return 
    i = 0
    j = 0

    while i < len(nums):
        if nums[i] > 0 or nums[i] < 0: 
            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j+=1
        i+=1
    return nums



print(move_zeroes_at_the_end(nums))