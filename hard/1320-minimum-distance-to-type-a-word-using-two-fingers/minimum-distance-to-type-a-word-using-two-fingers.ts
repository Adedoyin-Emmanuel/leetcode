function minimumDistance(word: string): number {
    const n = word.length;
    const getDistance = (p: number, q: number): number => {
        const x1 = Math.floor(p / 6),
            y1 = p % 6;
        const x2 = Math.floor(q / 6),
            y2 = q % 6;
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const dp: number[][][] = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(26);
        for (let j = 0; j < 26; j++) {
            dp[i][j] = new Array(26).fill(
                Math.floor(Number.MAX_SAFE_INTEGER / 2),
            );
        }
    }
    const firstChar = word.charCodeAt(0) - 65;
    for (let i = 0; i < 26; i++) {
        dp[0][i][firstChar] = 0;
        dp[0][firstChar][i] = 0;
    }

    for (let i = 1; i < n; i++) {
        const cur = word.charCodeAt(i) - 65;
        const prev = word.charCodeAt(i - 1) - 65;
        const d = getDistance(prev, cur);

        for (let j = 0; j < 26; j++) {
            dp[i][cur][j] = Math.min(dp[i][cur][j], dp[i - 1][prev][j] + d);
            dp[i][j][cur] = Math.min(dp[i][j][cur], dp[i - 1][j][prev] + d);

            if (prev === j) {
                for (let k = 0; k < 26; k++) {
                    const d0 = getDistance(k, cur);
                    dp[i][cur][j] = Math.min(
                        dp[i][cur][j],
                        dp[i - 1][k][j] + d0,
                    );
                    dp[i][j][cur] = Math.min(
                        dp[i][j][cur],
                        dp[i - 1][j][k] + d0,
                    );
                }
            }
        }
    }

    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            ans = Math.min(ans, dp[n - 1][i][j]);
        }
    }
    return ans;
}