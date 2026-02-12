nums = [0, 8, 10, 6, 5]


def find_largest_elem(lst):
    largest = lst[0]
    for i in range(1, len(lst)):
        if largest < lst[i]:
            largest = lst[i]
    return largest


# print(find_largest_elem(nums))
# [10, 10, 10, 10, 9]
def finding_second_largest_elem(nums):
    largest = nums[0]
    second_largest = 0
    count = 0
    for i in range(1, len(nums)):
        if nums[i] > largest:
            second_largest = largest
            largest = nums[i]
            count+=1
        if nums[i] < largest and second_largest < nums[i]:
            second_largest = nums[i]
            count+=1
    if count == 0:
        return -1

    return second_largest


print(finding_second_largest_elem(nums))
