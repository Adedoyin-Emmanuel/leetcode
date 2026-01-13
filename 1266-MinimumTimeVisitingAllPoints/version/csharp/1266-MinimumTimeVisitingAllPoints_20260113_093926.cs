// Last updated: 1/13/2026, 9:39:26 AM
// Big man doings lmao
1public class Solution {
2    public int MinTimeToVisitAllPoints(int[][] points) {
3        /**
4            I've done this with TypeScript and Python, let's try it with C#
5
6            Since C# is just Enterprise TypeScript, it should be pretty simple
7
8            1. We need to loop through each of the points and compare them
9            2. We need to get the difference between in the x and y coords
10            3. We need to track the minimum time it will take to visit all points.
11        */
12
13        int i = 0, minTime = 0;
14
15        while(i < points.Length - 1){
16            int x1 = points[i][0], y1 = points[i][1];
17            int x2 = points[i + 1][0], y2 = points[i + 1][1];
18
19            int dx = Math.Abs(x2 - x1), dy = Math.Abs(y2 - y1);
20
21            minTime += Math.Max(dx, dy);
22
23            i++;
24        }
25
26        return minTime;
27    }
28}