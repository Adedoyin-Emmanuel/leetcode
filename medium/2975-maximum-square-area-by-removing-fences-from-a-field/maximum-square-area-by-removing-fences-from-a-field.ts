function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
    /**
        This is very similar to the question I solved yesterday, I can't remember
        the name but the function signature are almost the same. Let's see if I can
        apply the same logic.

        TBH I feel bad kinda, I haven't watched DSA videos in a while, and I need
        to learn more especially other data types that I haven't come against like
        graphs and complex binary trees. God help me. 


     */

     const MOD = 10 ** 9 + 7;
     
     const h = [...hFences, 1, m].sort((a, b) => a - b);
     const v = [...vFences, 1, n].sort((a, b) => a - b);

     const hDiffs = new Set<number>();

     for(let i = 0; i < h.length; i++){
        for(let j = i + 1; j < h.length; j++){
            hDiffs.add(h[j] - h[i]);
        }
     }

     let best = -1;

     for(let i = 0; i < v.length; i++){
        for(let j = i + 1; j < v.length; j++){
            const diff = v[j] - v[i];

            if(hDiffs.has(diff)){
                best = Math.max(best, diff);
            }
        }
     }

     if(best === -1){
        return -1;
     }
    
     /**
     weird stuff, you actually can't just modulus the result, just for next time. 
     You've to convert it to BigInt and then to Number
    */

     const result = Number(BigInt(best) * BigInt(best) % BigInt(MOD));

     return result;
};