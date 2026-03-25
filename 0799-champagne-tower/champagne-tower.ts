function champagneTower(poured: number, query_row: number, query_glass: number): number {
    const DP: number[][] = Array.from({length: query_row + 1}, (_, i) => new Array(i + 1).fill(0));

    DP[0][0] = poured;

    for (let i = 0; i < query_row; i++) {
        if (!DP[i + 1]) {
            DP[i + 1] = new Array(i + 2).fill(0);
        }
        for (let j = 0; j <= i; j++) {
            let q = (DP[i][j] - 1) / 2;
            if (q > 0) {
                DP[i + 1][j] += q;
                DP[i + 1][j + 1] += q;
            }
        }

    }
    return Math.min(1, DP[query_row][query_glass]);
};