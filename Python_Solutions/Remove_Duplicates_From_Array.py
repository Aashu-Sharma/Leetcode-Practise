nums = [1, 1, 1, 2, 2, 2, 4, 4, 4, 5, 5, 5, 5]

def remove_duplicates_from_sorted_array(nums):
    unique_num = 0
    unique_count = 1
    for i in range(1, len(nums)):
        if nums[i] > nums[unique_num]:
            nums[unique_num+1] = nums[i]
            unique_num+=1
            unique_count+=1

    print(nums)
    return unique_count


print(remove_duplicates_from_sorted_array(nums))