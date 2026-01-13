# Last updated: 1/13/2026, 9:27:47 AM
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
16        i = 0
17        minTime = 0
18
19        while(i < len(points) - 1):
20            x1 = points[i][0]
21            y1 = points[i][1]
22            x2 = points[i + 1][0]
23            y2 = points[i + 1][1]
24
25            dx = abs(x2  - x1)
26            dy = abs(y2 - y1)
27
28            minTime += max(dx, dy)
29
30            i += 1
31        
32        return minTime
33        