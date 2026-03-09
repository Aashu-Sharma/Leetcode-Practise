nums = [2,2,1,1,1,2,2]

def find_majority_elem(nums):
    # better approach using hashmaps. 
    freq_map = {}
    for num in nums:
        freq_map[num] = freq_map.get(num, 0) + 1
        if freq_map[num] >= len(nums)/2:
            return num

print(find_majority_elem(nums))