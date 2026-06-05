function totalWaviness(num1: number, num2: number): number {
    // calculate the sum of the volatility values of all numbers in [0, num]
    const solve = (num: number): number => {
        // if the fluctuation value of numbers less than 3 is 0
        if (num < 100) {
            return 0;
        }
        const s: string = num.toString();
        const n: number = s.length;

        // memoized search uses two independent arrays
        // memo_cnt[pos][x][y]: the number of valid filling schemes where the current digit is at position pos, and the previous two digits are x and y
        const memo_cnt: number[][][] = Array(16)
            .fill(null)
            .map(() =>
                Array(10)
                    .fill(null)
                    .map(() => Array(10).fill(-1)),
            );
        // memo_sum[pos][x][y]: the fluctuation value when the current position is pos, and the two left digits are x and y
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
            // end position
            if (pos === n) {
                return [1, 0];
            }
            // use memoization only when not bounded by an upper limit and without leading zeros
            if (!isLimit && !isLeading && prev >= 0 && curr >= 0) {
                if (memo_cnt[pos][prev][curr] !== -1) {
                    return [
                        memo_cnt[pos][prev][curr],
                        memo_sum[pos][prev][curr],
                    ];
                }
            }

            // calculate the number of schemes and fluctuation value under the current conditions
            let cnt: number = 0,
                sum: number = 0;
            const up: number = isLimit ? parseInt(s[pos]) : 9;
            for (let digit = 0; digit <= up; ++digit) {
                const newLeading: boolean = isLeading && digit === 0;
                // the previous number is updated to curr
                const newPrev: number = curr;
                // the current number is updated to digit
                const newCurr: number = newLeading ? -1 : digit;
                const [subCnt, subSum] = dfs(
                    pos + 1,
                    newPrev,
                    newCurr,
                    isLimit && digit === up,
                    newLeading,
                );
                // only calculate the fluctuation value when there are no leading zeros
                if (!newLeading && prev >= 0 && curr >= 0) {
                    // when the digit is a peak or a valley, update the current fluctuation value
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
                // update the memoization array
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
