# Last updated: 1/3/2026, 12:03:14 PM
# Python was easy, let's try C#
1class Solution:
2    def numOfWays(self, n: int) -> int:
3        """
4            Okay, this shouldn't take long to solve. 
5
6            I solved this in 3hrs with TypeScript, I should solve this 
7
8            in 5 - 10 mins now that I've understood the logic.
9
10            I'm going to dive straight to the solution 
11
12            First we create a variable to hold the MOD
13
14            We already know what dtA and dtB are, let me recap
15
16            So for a N * 3 grid, there are 2 ways each row of the grid 
17
18            can be painted while respecting the adjacent rule. 
19            
20            A = A B C (different colors)
21            B = A B A (two colors)
22
23            Now, for type A, there are 6 different ways each cells can be painted,
24            
25            And also for B so the total possible way to paint the grid when n = 1
26
27            is 12. Understood?
28
29
30        """
31        MOD = 10 ** 9 + 7
32        dtA = 6
33        dtB = 6
34        result = 0
35
36        for i in range(2, n + 1):
37            newDtA = (2 * dtA + 2 * dtB) % MOD
38            newDtB = (2 * dtA + 3 * dtB) % MOD
39
40            dtA = newDtA
41            dtB = newDtB
42
43        result = (dtA + dtB) % MOD
44
45        return result
46
47
48        