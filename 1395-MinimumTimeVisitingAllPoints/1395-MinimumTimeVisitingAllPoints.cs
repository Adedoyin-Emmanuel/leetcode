// Last updated: 2/1/2026, 8:42:32 PM
public class Solution {
    public int MinTimeToVisitAllPoints(int[][] points) {
        /**
            I've done this with TypeScript and Python, let's try it with C#

            Since C# is just Enterprise TypeScript, it should be pretty simple

            1. We need to loop through each of the points and compare them
            2. We need to get the difference between in the x and y coords
            3. We need to track the minimum time it will take to visit all points.
        */

        int i = 0, minTime = 0;

        while(i < points.Length - 1){
            int x1 = points[i][0], y1 = points[i][1];
            int x2 = points[i + 1][0], y2 = points[i + 1][1];

            int dx = Math.Abs(x2 - x1), dy = Math.Abs(y2 - y1);

            minTime += Math.Max(dx, dy);

            i++;
        }

        return minTime;
    }
}