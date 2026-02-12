# Merge Sort
# The main idea is to divide the array into halves until we reach an array of size 1.

lst = [10, 7, 3, 2, 5]


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


# print(merge_sort(lst, 0, len(lst) - 1))


def Recursive_Bubble_Sort(arr, n):

    # base case
    if n == 1:
        return

    swapped = 0
    for i in range(n - 1):
        if arr[i] > arr[i + 1]:
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped = 1

    if swapped == 0:
        return arr

    Recursive_Bubble_Sort(arr, n - 1)
    return arr


# print(Recursive_Bubble_Sort(lst, len(lst)))


def Recursive_Insertion_Sort(arr, i, n):
    # my approach
    # if n == len(arr):
    #     return

    # for i in range(n, 0, -1):
    #     print(i)
    #     if arr[i] < arr[i-1]:
    #         temp = arr[i]
    #         arr[i] = arr[i-1]
    #         arr[i-1] = temp

    # Recursive_Insertion_Sort(arr, n+1)
    # return arr;

    # the correct approach

    if i == n:
        return arr
    key = arr[i]
    j = i-1

    while j >= 0 and arr[j] > key:
        arr[j+1] = arr[j]
        j-=1
    arr[j+1] = key
    Recursive_Insertion_Sort(arr, i+1, n)
    return arr;
    



print(Recursive_Insertion_Sort(lst, 0, len(lst)))


# Quick sort

# Step 1: choose any number from the array you want as the pivot and place it at its correct position.
# Step 2: then from there put the smaller on the left and larger on the right of the number's correct position.

def place_at_correct_place(arr, low, high):
    pivot = arr[low]
    i = low
    j = high 

    while i < j :
        while ((arr[i] <= pivot) and (i < high)):
            i+=1
        while (arr[j] > pivot and j >= low + 1):
            j-=1
        if i < j:
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[low], arr[j] = arr[j], pivot
    return j; 


# [10, 7, 3, 2, 5]
def quick_sort(arr, low, high):
    if low < high:
        partition_index = place_at_correct_place(
            arr, low, high
        )  # returns the partition index
        quick_sort(arr, low, partition_index - 1)
        quick_sort(arr, partition_index + 1, high)
    return arr


# print(quick_sort(lst, 0, len(lst) - 1))
