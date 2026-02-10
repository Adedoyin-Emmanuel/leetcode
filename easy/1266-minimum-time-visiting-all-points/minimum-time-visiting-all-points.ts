function minTimeToVisitAllPoints(points: number[][]): number {
    /**
        I decided to open today's Leetcode daily challenge to
        see the difficulty. I was expecting medium,
        I'm super surprised to see easy. 

        So let's get to it. 

        So I lost my streak, my laptop was faulty and I'm wasn't 
        feeling too well. painful, regardless we move. The
        goal is to master DSA, not a streak hero. 

        So let's try to understand the problem. 

        We need to return the minimal time it takes to visit all
        the points in a 2d array, each array in the array is a 
        coordinate (x, y).

        We can only perform one operation at a time, 
        move x (left or right), or move y (up or down).

        We can then move diagonally when we've the chance,
        that makes us make 2 moves in a succession. To move
        diagonally, we (+- x and +- y)

        The goal is to return the minimum time required to
        visit all the points.


        1. I will start by trying to loop the array such that
        I can compare one point to the other. (done)
        2. I can then find the difference between each points,
        vertically and horizontally by taking dx and dy. (done)
        3. I can then track the time taken and we repeat that
        till we're done. (done)
        
     */
     let i = 0, minTime = 0;

     while(i < points.length - 1){

        const x1 = points[i][0], x2 = points[i + 1][0];
        const y1 = points[i][1], y2 = points[i + 1][1];

        const dx = Math.abs(x2 - x1), dy = Math.abs(y2 - y1);

        minTime += Math.max(dx, dy);

        i ++;
     }

     return minTime;
};