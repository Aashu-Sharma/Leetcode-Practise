lst = [1, 3, 1, 2, 2, 3, 4, 13]

input_nums = [1, 2, 3, 10, 12, 13]

def find_count_of_elements(n, lst):
    new_lst = [0] * 14
    for i in lst:
        new_lst[i] += 1
    print(n, new_lst[n])


def provide_nums(nums, lst):
    for num in nums:
        if num in lst:
            find_count_of_elements(num, lst) 
        else:
            print(num, 0)
            

# provide_nums(input_nums, lst)

name = "aashutosh"
characters_to_count = ["a", "s", "d", "u", "h"]

def find_character_count(char, string):
    new_lst = [0] * 26
    
    for i in string:
        index = ord(i) - ord('a')
        new_lst[index] += 1
        
    print(char, new_lst[ord(char) - ord('a')])


def provide_character_to_count(string, char_list):
    for char in char_list:
        if char in string:
            find_character_count(char, string)
        else:
            print(char, 0)

provide_character_to_count(name, characters_to_count)