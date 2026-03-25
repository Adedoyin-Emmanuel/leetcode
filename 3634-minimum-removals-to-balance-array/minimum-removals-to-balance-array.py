class Solution:
    def minRemoval(self, nums: List[int], k: int) -> int:
        nums.sort()
        n = len(nums)
        i = 0
        maxWindow = 0

        for j in range(n):
            while(nums[j] > k * nums[i]):
                i += 1
            maxWindow = max(maxWindow, j - i + 1)

        return n - maxWindow