function totalWaviness(num1: number, num2: number): number {
    const solve = (num: number): number => {
        if (num < 100) {
            return 0;
        }
        const s: string = num.toString();
        const n: number = s.length;

     
        const memo_cnt: number[][][] = Array(16)
            .fill(null)
            .map(() =>
                Array(10)
                    .fill(null)
                    .map(() => Array(10).fill(-1)),
            );
        
        const memo_sum: number[][][] = Array(16)
            .fill(null)
            .map(() =>
                Array(10)
                    .fill(null)
                    .map(() => Array(10).fill(-1)),
            );

        const dfs = (
            pos: number,
            prev: number,
            curr: number,
            isLimit: boolean,
            isLeading: boolean,
        ): [number, number] => {
            if (pos === n) {
                return [1, 0];
            }
            
            if (!isLimit && !isLeading && prev >= 0 && curr >= 0) {
                if (memo_cnt[pos][prev][curr] !== -1) {
                    return [
                        memo_cnt[pos][prev][curr],
                        memo_sum[pos][prev][curr],
                    ];
                }
            }

    
            let cnt: number = 0,
                sum: number = 0;
            const up: number = isLimit ? parseInt(s[pos]) : 9;
            for (let digit = 0; digit <= up; ++digit) {
                const newLeading: boolean = isLeading && digit === 0;
                const newPrev: number = curr;
                const newCurr: number = newLeading ? -1 : digit;
                const [subCnt, subSum] = dfs(
                    pos + 1,
                    newPrev,
                    newCurr,
                    isLimit && digit === up,
                    newLeading,
                );
              
                if (!newLeading && prev >= 0 && curr >= 0) {
                  
                    if (
                        (prev < curr && curr > digit) ||
                        (prev > curr && curr < digit)
                    ) {
                        sum += subCnt;
                    }
                }

                cnt += subCnt;
                sum += subSum;
            }

            if (!isLimit && !isLeading && prev >= 0 && curr >= 0) {
                memo_cnt[pos][prev][curr] = cnt;
                memo_sum[pos][prev][curr] = sum;
            }

            return [cnt, sum];
        };

        const [_, totalSum] = dfs(0, -1, -1, true, true);
        return totalSum;
    };

    return solve(num2) - solve(num1 - 1);
}