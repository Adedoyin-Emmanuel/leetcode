function numOfWays(n: number): number {
    /**
        Okay this is actually my first hard question on Leetcode. 

        I belive I can solve this, it might just take me a couple of hours lol.

        So first things first, let me try to understand the problem and also note
        
        things I had to look up.


        If you're clueless nerd like me to understand this question you need to 
        know what adjacent means what a grid is, a row and a cell. 

        A grid is the full picture like in the image, a row is just one slice of 
        the grid that consists of cells. And a cell is an individial box that 
        makes up a row like so.

        Now adjacent means beside. Traditionally it means horizontally beside. 

        But to solve this we've to take account for Vertical sides too. So 
        bascially here is the rule.

        Any cell that is horizontally adjacent another cell in a row must not 
        have the same color for example

        Let's call the first row c and each cell items c1, c3, adn c3 respectively

        R Y G => c1 != c2 and c2 != c3


        Now for the vertical adjacent rule too, say we have another row under

        R Y G

        G R Y

        Let's call the next row d and each cell item d1, d2, and d3 respectively.

        d1 != c1 d2 != c2, and d3 != c3


        Now movig on to the core logic. 

        I understand that if let's say n = 1, 
        The vertical adjacency rule wouldn't come into play, 
        because it is only a single row, so the total number of ways to paint 
        each cell, respecting the horizontal adjacency rule, for Type A will be 
        3!, and for Type B will also be 3!, so that's the total ways for Type A + 
        total ways for Type B = number of ways to pain each cells following the 
        constraint. 
        
        Now let's say n = 2, For that, the tide changes, the vertical 
        adjacency rule will come to play here, because there is more than 1 row. 
        So the total number of ways to pain each cell respecting the horizontal 
        and vertical adjacency rule, will be this. 
        If the previous row is Type A, 
        there are 2 ways to paint the next row Type A, and there are also 2 ways 
        to paint the next row Type B. 
        So newA = 2 * dpA + 2 * dpB Also, if the 
        previous row is Type B, there are 2 ways to paint the next row, Type A 
        and 3 ways to paint the next row Type B. so newB = 2 * dpA + 3 * dpB so 
        therefore. newA = 2 * dpA + 2 * dpB newB = 2 * dpA + 3 * dpB


        And finally the mod is just to keep our large numbers in check.
     */

     /**
        For the implementation, I'm assuming we will have to loop through
        n (number of rows) and then we determine the number of ways we can paint
        the grid.
     */

     const MOD = (10 ** 9) + 7;
     let result = 0;
     let dpA = 6;
     let dpB = 6;


     if(!n || isNaN(n)){
        return 0;
     }

     if(n == 1){
        result = dpA + dpB;
        return result;
     }

    

     for(let i = 2; i <= n; i ++){

        const newDpA = (2 * dpA + 2 * dpB) % MOD;
        const newDpB = (2 * dpA + 3 * dpB) % MOD; 

        dpA = newDpA;
        dpB = newDpB;
     }

     result = (dpA + dpB) % MOD;

     return result;

};