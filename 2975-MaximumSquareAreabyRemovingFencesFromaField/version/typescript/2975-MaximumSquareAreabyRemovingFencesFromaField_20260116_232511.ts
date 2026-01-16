// Last updated: 1/16/2026, 11:25:11 PM
// Skeaky peasky bug. Just imagine man.
1function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
2    /**
3        This is very similar to the question I solved yesterday, I can't remember
4        the name but the function signature are almost the same. Let's see if I can
5        apply the same logic.
6
7        TBH I feel bad kinda, I haven't watched DSA videos in a while, and I need
8        to learn more especially other data types that I haven't come against like
9        graphs and complex binary trees. God help me. 
10
11
12     */
13
14     const MOD = 10 ** 9 + 7;
15     
16     const h = [...hFences, 1, m].sort((a, b) => a - b);
17     const v = [...vFences, 1, n].sort((a, b) => a - b);
18
19     const hDiffs = new Set<number>();
20
21     for(let i = 0; i < h.length; i++){
22        for(let j = i + 1; j < h.length; j++){
23            hDiffs.add(h[j] - h[i]);
24        }
25     }
26
27     let best = -1;
28
29     for(let i = 0; i < v.length; i++){
30        for(let j = i + 1; j < v.length; j++){
31            const diff = v[j] - v[i];
32
33            if(hDiffs.has(diff)){
34                best = Math.max(best, diff);
35            }
36        }
37     }
38
39     if(best === -1){
40        return -1;
41     }
42    
43     /**
44     weird stuff, you actually can't just modulus the result, just for next time. 
45     You've to convert it to BigInt and then to Number
46    */
47
48     const result = Number(BigInt(best) * BigInt(best) % BigInt(MOD));
49
50     return result;
51};