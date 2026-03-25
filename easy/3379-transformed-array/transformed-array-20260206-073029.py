class Solution:
    def constructTransformedArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = nums.copy()

        for i in range(n):
            newIndex = ((i + nums[i]) % n + n) % n
            result[i] = nums[newIndex]

        return result
        