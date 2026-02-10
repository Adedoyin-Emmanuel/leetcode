class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        """
            Let's try to see if I can write this with Python too. 
            I've done the explanation in my TypeScript solution so 
            I'm just going to write the steps to solving this below


            1. We need to find a way to loop through each point and compare them
            to another
            2. We need to find the difference between the points on x and y coordinates
            3. We need to track the minimum time it will take to move from point a to b
            overtime
        """     

        i, minTime = 0, 0

        while(i < len(points) - 1):
            x1, y1 = points[i][0], points[i][1]
            x2, y2 = points[i + 1][0], points[i + 1][1]

            dx, dy = abs(x2  - x1), abs(y2 - y1)

            minTime += max(dx, dy)

            i += 1
        
        return minTime
        