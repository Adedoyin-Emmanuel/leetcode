# Last updated: 1/13/2026, 9:29:30 AM
# Trying to minimize line of code
1class Solution:
2    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
3        """
4            Let's try to see if I can write this with Python too. 
5            I've done the explanation in my TypeScript solution so 
6            I'm just going to write the steps to solving this below
7
8
9            1. We need to find a way to loop through each point and compare them
10            to another
11            2. We need to find the difference between the points on x and y coordinates
12            3. We need to track the minimum time it will take to move from point a to b
13            overtime
14        """     
15
16        i, minTime = 0, 0
17
18        while(i < len(points) - 1):
19            x1, y1 = points[i][0], points[i][1]
20            x2, y2 = points[i + 1][0], points[i + 1][1]
21
22            dx, dy = abs(x2  - x1), abs(y2 - y1)
23
24            minTime += max(dx, dy)
25
26            i += 1
27        
28        return minTime
29        