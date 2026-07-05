function pathsWithMaxScore(board: string[]): number[] {
    const MOD = 1000000007;
    const n = board.length;

    let score: number[] = Array(n + 1).fill(-1);
    let ways: number[] = Array(n + 1).fill(0);

    for (let r = n - 1; r >= 0; r--) {
        const newScore: number[] = Array(n + 1).fill(-1);
        const newWays: number[] = Array(n + 1).fill(0);

        for (let c = n - 1; c >= 0; c--) {
            const ch = board[r][c];

            if (ch === 'X') 
                continue;

            if (ch === 'S') {
                newScore[c] = 0;
                newWays[c] = 1;
                continue;
            }

            const best = Math.max(score[c], newScore[c + 1], score[c + 1]);

            if (best === -1) 
                continue;

            let cnt = 0;

            if (score[c] === best) 
                cnt += ways[c];
            if (newScore[c + 1] === best) 
                cnt += newWays[c + 1];
            if (score[c + 1] === best) 
                cnt += ways[c + 1];

            const val = ch === 'E' ? 0 : Number(ch);
            newScore[c] = best + val;
            newWays[c] = cnt % MOD;
        }
        score = newScore;
        ways = newWays;
    }

    if (score[0] === -1) 
        return [0, 0];

    return [score[0], ways[0]];
}