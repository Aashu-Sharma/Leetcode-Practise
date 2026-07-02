nums = [-2,1,-3,4,-1,2,1,-5,4]

def max_subarray_sum(nums):
    # maxSum = 0
    # for i in range(len(nums)):
    #     subarray = []
    #     curr_sum = 0
    #     for j in range(i, len(nums)):
    #         subarray.append(nums[j])
    #         curr_sum += nums[j]
    #         if(curr_sum > maxSum):
    #             print("printing subarray with sum greater than maxsum", nums[i: j+1], curr_sum)
    #         maxSum = max(maxSum, curr_sum)
        
    #     print(subarray, curr_sum, maxSum)
    # return maxSum

    maxSum = nums[0] #becuase if the array includes only negative numbers, then initializing it with 0 will never get us the maximum sum as 0 will alwasy be greater than any negative number, so we initialize it with the first element of the array so that we can compare it with other elements. 

    curr_sum = 0

    for i in range(len(nums)):
        curr_sum = max(nums[i], curr_sum + nums[i])
        # at each number we ask whether our curr_sum is greeater than 0 or not, if yes then adding it with the current number will always give us a value greater than current number so we can clearly move forward, if not then adding a it with current num will give us a smaller value than current num, so it is better to start a new sum from here. 
        maxSum = max(maxSum, curr_sum)

    return maxSum

print(max_subarray_sum(nums))