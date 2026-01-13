// Last updated: 1/13/2026, 5:59:29 AM
// Trying to reduce code length as much as possible
1function minTimeToVisitAllPoints(points: number[][]): number {
2    /**
3        I decided to open today's Leetcode daily challenge to
4        see the difficulty. I was expecting medium,
5        I'm super surprised to see easy. 
6
7        So let's get to it. 
8
9        So I lost my streak, my laptop was faulty and I'm wasn't 
10        feeling too well. painful, regardless we move. The
11        goal is to master DSA, not a streak hero. 
12
13        So let's try to understand the problem. 
14
15        We need to return the minimal time it takes to visit all
16        the points in a 2d array, each array in the array is a 
17        coordinate (x, y).
18
19        We can only perform one operation at a time, 
20        move x (left or right), or move y (up or down).
21
22        We can then move diagonally when we've the chance,
23        that makes us make 2 moves in a succession. To move
24        diagonally, we (+- x and +- y)
25
26        The goal is to return the minimum time required to
27        visit all the points.
28
29
30        1. I will start by trying to loop the array such that
31        I can compare one point to the other. (done)
32        2. I can then find the difference between each points,
33        vertically and horizontally by taking dx and dy. (done)
34        3. I can then track the time taken and we repeat that
35        till we're done. (done)
36        
37     */
38     let i = 0, minTime = 0;
39
40     while(i < points.length - 1){
41
42        const x1 = points[i][0], x2 = points[i + 1][0];
43        const y1 = points[i][1], y2 = points[i + 1][1];
44
45        const dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);
46
47        minTime += Math.max(dx, dy);
48
49        i ++;
50     }
51
52     return minTime;
53};