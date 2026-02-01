// Last updated: 2/1/2026, 6:03:59 AM
1function minimumDeleteSum(s1: string, s2: string): number {
2    /**
3        Okay, this is a DP question it is tricky but then let's see.
4
5        So from what I can understand, the goal of this problem is to
6        return the minimum sum to achieve deleting elements from each string until they
7        are equal.
8
9        I think we should first create an utility function that converts letters to ASCII.
10     */ 
11
12     function convertToASCI(letter: string){
13        return letter.charCodeAt(0);
14     }
15
16    let DP: number[][] = [];
17
18     //fill the DP array.
19    DP = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(0));
20
21    DP[s1.length][s2.length] = 0;
22
23    for(let i = s1.length - 1; i >= 0; i--){
24        DP[i][s2.length] = convertToASCI(s1[i]) + DP[i+1][s2.length]
25
26        
27        for(let j = s2.length - 1; j >= 0; j--){
28            DP[s1.length][j] = convertToASCI(s2[j]) + DP[s1.length][j + 1];
29
30            if(s1[i] === s2[j]){
31                DP[i][j] = DP[i + 1][j + 1];
32            }else{
33                const cost1 = convertToASCI(s1[i]) + DP[i + 1][j];
34                const cost2 = convertToASCI(s2[j]) + DP[i][j + 1];
35
36                const minCost = Math.min(cost1, cost2);
37
38                DP[i][j] = minCost;
39            }
40        }
41    }
42
43
44    return DP[0][0];
45};