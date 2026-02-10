function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
    /**
        Here we go again. I can see a relationship between the daily 
        questions
        At this point, Leetcode doesn't just choose questions randomly,
        each of those questions are linked.

        I remember when I started Leetcoding this year, I started with
        easy questions, and then arrays, from arrays to DP, from DP to trees
        binary trees, DFS, BFS and then I did a lot of DP related questions
        and then linear / geometry questions, rectangles and squares which is
        what I'm still doing presently. That's fun. I love it already.

        Waking up to solve problems everyday gives me dopamine boost.


        Broo, I kinda love these geometry questions man. If you see the 
        logic I'm using here man. I love this, God is finally answering
        my prayers, bro I had a block skull before, nothing dey gree
        enter. But now I'm enjoying every bit of thise like good music.

     */

     let maxSide = 0;

     for(let i = 0; i < bottomLeft.length - 1; i++){
        for(let j = i + 1; j < topRight.length; j++){
            let xOneI = bottomLeft[i][0], yOneI = bottomLeft[i][1];
            let xTwoI = topRight[i][0], yTwoI = topRight[i][1];

            let xOneJ = bottomLeft[j][0], yOneJ = bottomLeft[j][1];
            let xTwoJ = topRight[j][0], yTwoJ = topRight[j][1];

            let top = Math.min(yTwoI, yTwoJ);
            let left = Math.max(xOneI, xOneJ);
            let right = Math.min(xTwoI, xTwoJ);
            let bottom = Math.max(yOneI, yOneJ);

            if(left < right && bottom < top){
                let side = Math.min(right - left, top - bottom);
                maxSide = Math.max(maxSide, side);
            }
        }
     }

     return maxSide * maxSide;

};