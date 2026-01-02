# Last updated: 1/2/2026, 4:26:44 AM
# Same problem, but with a different language, Python is pretty good for solving DSA.
1class Solution:
2    def repeatedNTimes(self, nums: List[int]) -> int:
3        """
4            Okay, so here is me just trying to solve this problem with Python too, just for practise. 
5
6            Things I had to look up
7
8            1. How to create a set in Python.
9        """
10        duplicate = 0
11        seen = set()
12
13        for i in range(len(nums)):
14
15            # check if the current value is seen
16            if(nums[i] in seen):
17                duplicate = nums[i]
18                break
19       
20            seen.add(nums[i])
21        return duplicate