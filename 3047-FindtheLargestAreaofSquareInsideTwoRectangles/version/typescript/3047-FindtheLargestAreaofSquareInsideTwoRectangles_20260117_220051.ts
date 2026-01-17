// Last updated: 1/17/2026, 10:00:51 PM
// Thank  you Jesus for another one.
1function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
2    /**
3        Here we go again. I can see a relationship between the daily 
4        questions
5        At this point, Leetcode doesn't just choose questions randomly,
6        each of those questions are linked.
7
8        I remember when I started Leetcoding this year, I started with
9        easy questions, and then arrays, from arrays to DP, from DP to trees
10        binary trees, DFS, BFS and then I did a lot of DP related questions
11        and then linear / geometry questions, rectangles and squares which is
12        what I'm still doing presently. That's fun. I love it already.
13
14        Waking up to solve problems everyday gives me dopamine boost.
15
16
17        Broo, I kinda love these geometry questions man. If you see the 
18        logic I'm using here man. I love this, God is finally answering
19        my prayers, bro I had a block skull before, nothing dey gree
20        enter. But now I'm enjoying every bit of thise like good music.
21
22     */
23
24     let maxSide = 0;
25
26     for(let i = 0; i < bottomLeft.length - 1; i++){
27        for(let j = i + 1; j < topRight.length; j++){
28            let xOneI = bottomLeft[i][0], yOneI = bottomLeft[i][1];
29            let xTwoI = topRight[i][0], yTwoI = topRight[i][1];
30
31            let xOneJ = bottomLeft[j][0], yOneJ = bottomLeft[j][1];
32            let xTwoJ = topRight[j][0], yTwoJ = topRight[j][1];
33
34            let top = Math.min(yTwoI, yTwoJ);
35            let left = Math.max(xOneI, xOneJ);
36            let right = Math.min(xTwoI, xTwoJ);
37            let bottom = Math.max(yOneI, yOneJ);
38
39            if(left < right && bottom < top){
40                let side = Math.min(right - left, top - bottom);
41                maxSide = Math.max(maxSide, side);
42            }
43        }
44     }
45
46     return maxSide * maxSide;
47
48};