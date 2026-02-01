nums = [2, 2, 2, 2, 1, 3, 3, 3, 3]


frequency_dict = {}
for elem in nums:
    if elem in frequency_dict:
        frequency_dict[elem] += 1
    else:
        frequency_dict[elem] = 1

def count_frequency(lst):
    result = []
    for key, value in frequency_dict.items():
        result.append([key, value])

    return result

# print(count_frequency(nums))


def find_highest_occuring_elem(lst):
    biggest_key = 0
    highest_freq = 0
    for key, value in frequency_dict.items():
        if value > highest_freq and value != highest_freq:
            biggest_key = key
            highest_freq = value
    return biggest_key

print(find_highest_occuring_elem(nums))

# print(frequency_dict.items())