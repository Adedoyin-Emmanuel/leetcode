# Last updated: 2/7/2026, 12:20:24 AM
1class Solution:
2    def minRemoval(self, nums: List[int], k: int) -> int:
3        nums.sort()
4        n = len(nums)
5        i = 0
6        maxWindow = 0
7
8        for j in range(n):
9            while(nums[j] > k * nums[i]):
10                i += 1
11            maxWindow = max(maxWindow, j - i + 1)
12
13        return n - maxWindow