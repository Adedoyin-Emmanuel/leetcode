# Last updated: 1/8/2026, 12:14:10 AM
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        """
            Okay, so here is me just trying to solve this problem with Python too, just for practise. 

            Things I had to look up

            1. How to create a set in Python.

            Now this is even way simpler.
        """
        seen = set()

        for num in nums:
            if(num in seen):
                return num
            seen.add(num)