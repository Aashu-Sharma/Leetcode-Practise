nums = [2, 2, 1, 1, 1, 2, 2]

def find_majority_elem(nums):
    # better approach using hashmaps. 
    # freq_map = {}
    # for num in nums:
    #     freq_map[num] = freq_map.get(num, 0) + 1
    #     if freq_map[num] >= len(nums)/2:
    #         return num

    #optimal approach. 
    # Moore's Voting Algorithm
    elem = nums[0]
    count = 0

    for num in nums:
        if num == elem:
            count+=1
        else:
            count-=1
        
        if count == 0:
            elem = num
            count+=1

    return elem


print(find_majority_elem(nums))

# Moore's Voting Algorithm 