# Last updated: 1/2/2026, 4:30:23 AM
# Another approach to solving the same problem, but with minimal code. (python)
1class Solution:
2    def repeatedNTimes(self, nums: List[int]) -> int:
3        """
4            Okay, so here is me just trying to solve this problem with Python too, just for practise. 
5
6            Things I had to look up
7
8            1. How to create a set in Python.
9
10            Now this is even way simpler.
11        """
12        seen = set()
13
14        for num in nums:
15            if(num in seen):
16                return num
17            seen.add(num)