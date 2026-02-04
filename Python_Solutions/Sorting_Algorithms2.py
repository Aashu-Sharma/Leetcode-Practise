# Merge Sort
# The main idea is to divide the array into halves until we reach an array of size 1.

lst = [7, 4, 1, 5, 3]


def mergeList(lst, low, mid, high):
    print(low, mid, high)
    temp = []
    left = low
    right = mid + 1

    while left <= mid and right <= high:
        if lst[left] < lst[right]:
            temp.append(lst[left])
            left += 1
        else:
            temp.append(lst[right])
            right += 1

    while left <= mid:
        temp.append(lst[left])
        left += 1
        
    while right <= high:
        temp.append(lst[right])
        right += 1

    for i in range(low, high + 1):
        lst[i] = temp[i - low]


def merge_sort(lst, low, high):
    if low >= high:
        return
    mid = (low + high) // 2

    merge_sort(lst, low, mid)
    merge_sort(lst, mid + 1, high)
    mergeList(lst, low, mid, high)
    print(lst)
    return lst


print(merge_sort(lst, 0, len(lst) - 1))
