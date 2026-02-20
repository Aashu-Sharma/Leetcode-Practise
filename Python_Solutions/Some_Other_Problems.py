nums = [1, 2, 2, 2, 3, 4, 5]
nums2 = [2, 3, 4, 5, 5, 5, 6, 7, 8]
n = 10

def linear_search(nums, n):
    for i in range(len(nums)):
        if nums[i] == n:
            return i
    return -1

# print(linear_search(nums, n))

def union_of_sorted_arrays(nums1, nums2):
    # freq_map = {}
    # for num in nums1:
    #     freq_map[num] = freq_map.get(num, 0) + 1

    # for num in nums2:
    #     freq_map[num] = freq_map.get(num, 0) + 1
    
    # return sorted(freq_map.keys())

    # unique_set = set(nums1) | set(nums2) # '|' operator combines two sets into one. It is a set only operator
    # return sorted(unique_set)

    union = []
    i, j = 0, 0

    while (i < len(nums1) and j < len(nums2)):
        if nums1[i] < nums2[j]:
            if not union or nums1[i] not in union:
                union.append(nums1[i])
            i+=1
            print(union)
        elif nums1[i] > nums2[j]:
            if not union or nums2[j] not in union:
                union.append(nums2[j])
            j+=1
            print(union)
        else:
            union.append(nums1[i])
            i+=1
            j+=1
            print(union)
    
    while i < len(nums1):
        if not union or nums1[i] not in union:
            union.append(nums1[i])
        i+=1
    while j < len(nums2):
        if not union or nums2[j] not in union:
            union.append(nums2[j])
        j+=1

    return union

# print(union_of_sorted_arrays(nums, nums2))


another_nums = [2, 4, 3, 1, 6, 7, 5]

def find_missing_number(nums):
    new_nums = [0] * (len(nums) + 1)
    for elem in nums:
        new_nums[elem - 1] = elem

    for i in range(len(new_nums)):
        if new_nums[i] == 0 and new_nums[-1] != 0:
            return i+1
    return "no number is missing"

    # n = len(nums) + 1
    # total_sum = sum(nums)
    # expected_sum = (n * (n + 1))//2

    # return expected_sum - total_sum
    

print(find_missing_number(another_nums))