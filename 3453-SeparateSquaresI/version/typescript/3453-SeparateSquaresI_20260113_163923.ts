// Last updated: 1/13/2026, 4:39:23 PM
// trying to reduce the line of codes lmao
1function separateSquares(squares: number[][]): number {
2    /**
3        The thing about solving Leetcode problems is that
4        when you discover a logic to solve a problem, you will know
5        when to apply that logic to another problem.
6
7        Yesterday I solved a problem relating to finding the minimum
8        second it will take to move from one point to another in the array.
9
10        And I discovered that since each points are coordinte (x,y), 
11        there is no need to have an inner loop to loop through the arrray,
12        we can simply access the elements using the index 0, 1.
13
14        We've a similar thing here. We know that the element in the array,
15        will always have [xi, yi, li], so we don't need 2 loops.
16
17        Now, let's better understand the problem. We're to find the mimimum
18        y-coordinate value of a horizontal line such that the total area of 
19        the squares above the line equals the total area of the squares below
20        the line. 
21
22        Let's understand the variables.
23
24        1. x = bottom left x
25        2. y = bottom left y
26        3. l = side length
27
28        Bottom = yi
29        Top = yi + li
30        Width = li
31        
32     */
33
34     let totalAbove = 0, totalBelow = 0;
35     let high = -Infinity, low = Infinity, constraint = 10 ** -5;
36
37     squares.forEach((square) =>{
38        low = Math.min(low, square[1]);
39        high = Math.max(high, square[1] + square[2]);
40     });
41
42     while(high - low > constraint){
43        
44        let mid = (high + low) / 2, totalAbove = 0, totalBelow = 0;
45
46        for(let i = 0; i < squares.length; i++){
47            let y0 = squares[i][1], l = squares[i][2];
48            let top = y0 + l, areaBelow = 0, areaAbove = 0;
49
50            if(mid <= y0){
51                areaBelow = 0;
52                areaAbove = l * l;
53            }else if(mid >= y0 + l){
54                areaAbove = 0;
55                areaBelow = l * l;
56            }else{
57                areaBelow = (mid - y0) * l;
58                areaAbove = (y0 + l - mid) * l;
59            }
60
61            totalAbove += areaAbove;
62            totalBelow += areaBelow;
63        }
64
65        if(totalAbove > totalBelow){
66            low = mid;
67        }else{
68            high = mid;
69        }
70
71     }
72
73     return low;
74};