function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
    /**
        My brain is literally fried right now. Let's still see if i can solve this.
        
     */

     function getMaxConsecutiveGap(bars: number[]): number{
        if(bars.length === 0) return 1;

        bars.sort((a, b)=>  a - b);

        let maxRun = 1, currentRun = 1;

        for(let i = 0; i < bars.length; i++){
            if(bars[i] === bars[i - 1] + 1){
                currentRun ++;
            }else{
                maxRun = Math.max(maxRun, currentRun);
                currentRun =  1;
            }
        }
        
        maxRun = Math.max(maxRun, currentRun);
        
        return maxRun + 1;
     }

     const maxH = getMaxConsecutiveGap(hBars);
     const maxV = getMaxConsecutiveGap(vBars);

     const side = Math.min(maxH, maxV);

     return side * side;
};