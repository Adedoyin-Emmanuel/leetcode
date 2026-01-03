// Last updated: 1/3/2026, 12:42:47 PM
// Wow, the same algorithm but C# is weirder bruh.
1public class Solution {
2    public int NumOfWays(int n) {
3        /**
4            Back to writing C#, I'm not going to do much explanation here,
5            I'm just going straight to solving it immediately, no time.
6
7            For some weird reasons, I'm just discovering C# has no exponent
8            operator
9        */
10
11        long MOD = (int)1E9 + 7;
12        long dtA = 6;
13        long dtB = 6;
14        long result = 0;
15
16        for(int i = 2; i <= n; i++){
17            long newDtA = (2 * dtA + 2 * dtB) % MOD;
18            long newDtB = (2 * dtA + 3 * dtB) % MOD;
19
20            dtA = newDtA;
21            dtB = newDtB;
22        }
23
24        result = dtA + dtB;
25
26        return (int)(result % MOD);
27    }
28}