# Last updated: 2/6/2026, 5:38:10 AM
1class Solution:
2    def constructTransformedArray(self, nums: List[int]) -> List[int]:
3        n = len(nums)
4        result = nums.copy()
5
6        for i in range(n):
7            newIndex = ((i + nums[i]) % n + n) % n
8            result[i] = nums[newIndex]
9
10        return result
11        