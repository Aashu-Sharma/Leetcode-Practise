nums =[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]

def three_sum(nums):

    nums.sort()
    print(nums)
    output = []
    i = 0

    while i < len(nums):
        if i > 0 and nums[i] == nums[i - 1]:
            i += 1
            continue

        left = i + 1
        right = len(nums) - 1

        diff_sum = 0 - nums[i]

        while right > left:
            sum_of_two = nums[left] + nums[right]
            if sum_of_two == diff_sum:
                output.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right  and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1

            elif sum_of_two < diff_sum:
                left += 1
            else:
                right -= 1
        i += 1
    return output


print(three_sum(nums))
