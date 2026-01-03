// Last updated: 1/3/2026, 7:54:08 AM
// I'm getting better. Thank you Jesus
1function numOfWays(n: number): number {
2    /**
3        Okay this is actually my first hard question on Leetcode. 
4
5        I belive I can solve this, it might just take me a couple of hours lol.
6
7        So first things first, let me try to understand the problem and also note
8        
9        things I had to look up.
10
11
12        If you're clueless nerd like me to understand this question you need to 
13        know what adjacent means what a grid is, a row and a cell. 
14
15        A grid is the full picture like in the image, a row is just one slice of 
16        the grid that consists of cells. And a cell is an individial box that 
17        makes up a row like so.
18
19        Now adjacent means beside. Traditionally it means horizontally beside. 
20
21        But to solve this we've to take account for Vertical sides too. So 
22        bascially here is the rule.
23
24        Any cell that is horizontally adjacent another cell in a row must not 
25        have the same color for example
26
27        Let's call the first row c and each cell items c1, c3, adn c3 respectively
28
29        R Y G => c1 != c2 and c2 != c3
30
31
32        Now for the vertical adjacent rule too, say we have another row under
33
34        R Y G
35
36        G R Y
37
38        Let's call the next row d and each cell item d1, d2, and d3 respectively.
39
40        d1 != c1 d2 != c2, and d3 != c3
41
42
43        Now movig on to the core logic. 
44
45        I understand that if let's say n = 1, 
46        The vertical adjacency rule wouldn't come into play, 
47        because it is only a single row, so the total number of ways to paint 
48        each cell, respecting the horizontal adjacency rule, for Type A will be 
49        3!, and for Type B will also be 3!, so that's the total ways for Type A + 
50        total ways for Type B = number of ways to pain each cells following the 
51        constraint. 
52        
53        Now let's say n = 2, For that, the tide changes, the vertical 
54        adjacency rule will come to play here, because there is more than 1 row. 
55        So the total number of ways to pain each cell respecting the horizontal 
56        and vertical adjacency rule, will be this. 
57        If the previous row is Type A, 
58        there are 2 ways to paint the next row Type A, and there are also 2 ways 
59        to paint the next row Type B. 
60        So newA = 2 * dpA + 2 * dpB Also, if the 
61        previous row is Type B, there are 2 ways to paint the next row, Type A 
62        and 3 ways to paint the next row Type B. so newB = 2 * dpA + 3 * dpB so 
63        therefore. newA = 2 * dpA + 2 * dpB newB = 2 * dpA + 3 * dpB
64
65
66        And finally the mod is just to keep our large numbers in check.
67     */
68
69     /**
70        For the implementation, I'm assuming we will have to loop through
71        n (number of rows) and then we determine the number of ways we can paint
72        the grid.
73     */
74
75     const MOD = (10 ** 9) + 7;
76     let result = 0;
77     let dpA = 6;
78     let dpB = 6;
79
80
81     if(!n || isNaN(n)){
82        return 0;
83     }
84
85     if(n == 1){
86        result = dpA + dpB;
87        return result;
88     }
89
90    
91
92     for(let i = 2; i <= n; i ++){
93
94        const newDpA = (2 * dpA + 2 * dpB) % MOD;
95        const newDpB = (2 * dpA + 3 * dpB) % MOD; 
96
97        dpA = newDpA;
98        dpB = newDpB;
99     }
100
101     result = (dpA + dpB) % MOD;
102
103     return result;
104
105};