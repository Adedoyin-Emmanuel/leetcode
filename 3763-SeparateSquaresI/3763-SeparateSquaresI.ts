// Last updated: 2/1/2026, 8:42:10 PM
function separateSquares(squares: number[][]): number {
    /**
        The thing about solving Leetcode problems is that
        when you discover a logic to solve a problem, you will know
        when to apply that logic to another problem.

        Yesterday I solved a problem relating to finding the minimum
        second it will take to move from one point to another in the array.

        And I discovered that since each points are coordinte (x,y), 
        there is no need to have an inner loop to loop through the arrray,
        we can simply access the elements using the index 0, 1.

        We've a similar thing here. We know that the element in the array,
        will always have [xi, yi, li], so we don't need 2 loops.

        Now, let's better understand the problem. We're to find the mimimum
        y-coordinate value of a horizontal line such that the total area of 
        the squares above the line equals the total area of the squares below
        the line. 

        Let's understand the variables.

        1. x = bottom left x
        2. y = bottom left y
        3. l = side length

        Bottom = yi
        Top = yi + li
        Width = li
        
     */

     let totalAbove = 0, totalBelow = 0;
     let high = -Infinity, low = Infinity, constraint = 10 ** -5;

     squares.forEach((square) =>{
        low = Math.min(low, square[1]);
        high = Math.max(high, square[1] + square[2]);
     });

     while(high - low > constraint){
        
        let mid = (high + low) / 2, totalAbove = 0, totalBelow = 0;

        for(let i = 0; i < squares.length; i++){
            let y0 = squares[i][1], l = squares[i][2];
            let top = y0 + l, areaBelow = 0, areaAbove = 0;

            if(mid <= y0){
                areaBelow = 0;
                areaAbove = l * l;
            }else if(mid >= y0 + l){
                areaAbove = 0;
                areaBelow = l * l;
            }else{
                areaBelow = (mid - y0) * l;
                areaAbove = (y0 + l - mid) * l;
            }

            totalAbove += areaAbove;
            totalBelow += areaBelow;
        }

        if(totalAbove > totalBelow){
            low = mid;
        }else{
            high = mid;
        }

     }

     return low;
};