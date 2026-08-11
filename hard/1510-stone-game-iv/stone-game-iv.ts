function winnerSquareGame(n: number): boolean {
    const dp: boolean[] = new Array(n + 1).fill(false);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            if (!dp[i - j * j]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};