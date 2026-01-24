lst = [1, 3, 1, 2, 2, 3, 4, 13]

input_nums = [1, 2, 3, 10, 12, 13]

def find_count_of_elements(n, lst):
    new_lst = [0] * 14
    for i in range(len(lst)):
        new_lst[lst[i]] += 1
    print(n, new_lst[n])


def provide_nums(nums, lst):
    for num in nums:
        if num in lst:
            find_count_of_elements(num, lst) 
        else:
            print(num, 0)
            

provide_nums(input_nums, lst)