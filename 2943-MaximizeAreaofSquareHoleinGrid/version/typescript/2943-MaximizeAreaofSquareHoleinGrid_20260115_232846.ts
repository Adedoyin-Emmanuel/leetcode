// Last updated: 1/15/2026, 11:28:46 PM
// ggs.
1function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
2    /**
3        My brain is literally fried right now. Let's still see if i can solve this.
4        
5     */
6
7     function getMaxConsecutiveGap(bars: number[]): number{
8        if(bars.length === 0) return 1;
9
10        bars.sort((a, b)=>  a - b);
11
12        let maxRun = 1, currentRun = 1;
13
14        for(let i = 0; i < bars.length; i++){
15            if(bars[i] === bars[i - 1] + 1){
16                currentRun ++;
17            }else{
18                maxRun = Math.max(maxRun, currentRun);
19                currentRun =  1;
20            }
21        }
22        
23        maxRun = Math.max(maxRun, currentRun);
24        
25        return maxRun + 1;
26     }
27
28     const maxH = getMaxConsecutiveGap(hBars);
29     const maxV = getMaxConsecutiveGap(vBars);
30
31     const side = Math.min(maxH, maxV);
32
33     return side * side;
34};