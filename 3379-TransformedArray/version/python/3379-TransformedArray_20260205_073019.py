# Last updated: 2/5/2026, 7:30:19 AM
1class Solution:
2    def constructTransformedArray(self, nums: List[int]) -> List[int]:
3        n = len(nums)
4        result = nums.copy()
5
6        for i in range(n):
7            if(nums[i] > 0):
8                rightSteps = nums[i]
9                newIndex = (i + rightSteps) % n
10
11                result[i] = nums[newIndex]
12            elif(nums[i] < 0):
13                leftSteps = abs(nums[i])
14                newIndex = ((i - leftSteps) % n) + n % n
15
16                result[i] = nums[newIndex]
17            else:
18                result[i] = nums[i]
19        
20        return result