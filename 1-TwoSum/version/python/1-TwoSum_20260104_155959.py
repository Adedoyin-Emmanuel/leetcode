# Last updated: 1/4/2026, 3:59:59 PM
# Get in joooor
1class Solution:
2    def twoSum(self, nums: List[int], target: int) -> List[int]:
3        """
4            I've solved this in C# and TypeScript so I will be going straight
5            to the solution here.
6
7            Just like before, the idea is to loop through the numbers in the
8            array, and then get the number that will complement the target
9
10            and while doing that, save the items we've seen. We need to create a
11            map to save seen numbers. 
12
13            Things I had to look up.
14
15            1. How to create a map in Python
16            2. How to access element in a map
17        """
18
19        seen = dict()
20
21        for i in range(len(nums)):
22            current_number = nums[i]
23            complement = target - current_number
24
25            # we check if we've the complement in the seen map
26            if complement in seen:
27                indexOfComplement = seen.get(complement)
28                result = []
29
30                result.append(indexOfComplement)
31                result.append(i)
32
33                return result
34            
35            seen[nums[i]] = i
36
37        return []
38
39
40        