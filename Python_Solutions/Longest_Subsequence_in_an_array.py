nums = [100,4,200,1,3,2]

def longest_consecutive_subsequence(nums):
    new_set = set(nums)
    max_len = 0

    for num in new_set:
        prev = num - 1
        if prev not in new_set:
            next = num+1
            count = 1
            while next in new_set:
                next+=1
                count+=1
            max_len = max(max_len, count)

    return max_len

    

        
        

print(longest_consecutive_subsequence(nums))