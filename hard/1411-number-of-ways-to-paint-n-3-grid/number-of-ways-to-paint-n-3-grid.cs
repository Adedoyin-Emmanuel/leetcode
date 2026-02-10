public class Solution {
    public int NumOfWays(int n) {
        /**
            Back to writing C#, I'm not going to do much explanation here,
            I'm just going straight to solving it immediately, no time.

            For some weird reasons, I'm just discovering C# has no exponent
            operator
        */

        long MOD = (int)1E9 + 7;
        long dtA = 6;
        long dtB = 6;
        long result = 0;

        for(int i = 2; i <= n; i++){
            long newDtA = (2 * dtA + 2 * dtB) % MOD;
            long newDtB = (2 * dtA + 3 * dtB) % MOD;

            dtA = newDtA;
            dtB = newDtB;
        }

        result = dtA + dtB;

        return (int)(result % MOD);
    }
}