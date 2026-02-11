nums = [65, 46, 24, 52, 20, 9]

# Selection Sort

def selection_sort(lst):
    # my earlier implementation, but it was wrong, works fine, but it is not selection sort 
    # for i in range(len(lst)):
    #     min = i
    #     for j in range(i, len(lst)):
    #         if lst[j] < lst[min]:
    #             min = j
    #             temp = lst[j]
    #             lst[j] = lst[i]
    #             lst[i] = temp
    # return lst

    # correct implementation. 

    for i in range(len(lst)):
        min = i
        for j in range(i+1, len(lst)):
            if(lst[j] < lst[min]):
                min = j
        temp = lst[min]
        lst[min] = lst[i]
        lst[i] = temp
    return lst;

# print(selection_sort(nums))

# bubble sort

# bubble sort pushes the maximum elem to the last through adjacent swapping. 
def bubble_sort(lst):
    start = len(lst) - 1
    # reverse travering a list is done this way in python
    for i in range(start, 0, -1):
        for j in range(i):
            if lst[j] > lst[j + 1]:
                temp = lst[j + 1]
                lst[j + 1] = lst[j]
                lst[j] = temp
    return lst


print(bubble_sort(nums))

# Insertion Sort

def insertion_sort(lst):
    for i in range(len(lst)):
        for j in range(i, 0, -1):
            if lst[j - 1] > lst[j]:
                temp = lst[j - 1]
                lst[j - 1] = lst[j]
                lst[j] = temp

    return lst


# print(insertion_sort(nums))
