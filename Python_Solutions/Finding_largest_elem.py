nums = [10, 10, 10, 10, 9]


def find_largest_elem(lst):
    largest = lst[0]
    for i in range(1, len(lst)):
        if largest < lst[i]:
            largest = lst[i]
    return largest


# print(find_largest_elem(nums))
# [10, 10, 10, 10, 9]
def finding_second_largest_elem(nums):
    largest = float('-inf')
    second_largest = float('-inf')
    count = 0
    for i in range(len(nums)):
        if nums[i] > largest:
            second_largest = largest
            largest = nums[i]
            count+=1
        if nums[i] < largest and second_largest < nums[i]:
            second_largest = nums[i]
            count+=1
    if count == 0 or len(nums) <= 2:
        return -1

    return second_largest


def finding_second_smallest_elem(nums):
    smallest = float("inf")
    second_smallest = float("inf")
    count = 0

    for i in range(len(nums)):
        if nums[i] < smallest:
            second_smallest = smallest
            smallest = nums[i]
            count+=1

        if nums[i] > smallest and nums[i] < second_smallest:
            second_smallest = nums[i]
            count+=1

    if count == 0 or len(nums) < 2:
        return -1
    return second_smallest

print(finding_second_largest_elem(nums))
print(finding_second_smallest_elem(nums))

