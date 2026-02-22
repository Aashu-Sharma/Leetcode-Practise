nums = [1, 1, 2, 4, 4, 2, 3]

def find_single_num(nums):
    # freq_map = {}

    # for num in nums:
    #     freq_map[num] = freq_map.get(num, 0) + 1

    # for key, value in freq_map.items():
    #     if value == 1:
    #         return key
        
    # return False

    result = 0

    for num in nums:
        result ^= num

    return result


print(find_single_num(nums))



