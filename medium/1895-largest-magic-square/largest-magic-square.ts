function largestMagicSquare(grid: number[][]): number {
    /**
        This is looking fairly simple than other square problems 
        I"ve solved recently. I think throughout this week was 
        square questions. I wonder what next week holds.
     */

     const m = grid.length, n = grid[0].length;

     const rowPrefix = Array.from({length: m}, () => Array(n).fill(0));
     const colPrefix = Array.from({length: m}, () => Array(n).fill(0));

    //we fill the row then column prefixes
    for(let row = 0; row < m; row++){
        for(let column = 0; column < n; column++){
            rowPrefix[row][column] = grid[row][column] + (column > 0 ? rowPrefix[row][column - 1]: 0);
        }
    }

    for(let column = 0; column < n; column++){
        for(let row = 0; row < m; row++){
            colPrefix[row][column] = grid[row][column] + (row > 0 ? colPrefix[row - 1][column] : 0);
        }
    }

    const maxSize = Math.min(m, n);

    for(let k = maxSize; k >= 2; k--){
        for(let row = 0; row + k <= m; row++){
            for(let column = 0; column + k <= n; column++){
                const target = rowPrefix[row][column + k - 1] - (column > 0 ? rowPrefix[row][column - 1] : 0);

                let valid = true;

                for(let i = 0; i < k; i++){
                    const rowSum = rowPrefix[row + i][column + k - 1] - (column > 0 ? rowPrefix[row + i][column - 1] : 0);

                    if(rowSum !== target){
                        valid = false;
                        break;
                    }
                }

                if(!valid) continue;

                for (let j = 0; j < k; j++) {
                    const colSum =
                        colPrefix[row + k - 1][column + j] -
                        (row > 0 ? colPrefix[row - 1][column + j] : 0);

                    if (colSum !== target) {
                        valid = false;
                        break;
                    }
                }

                if (!valid) continue;

                let d1 = 0, d2 = 0;

                for (let i = 0; i < k; i++) {
                    d1 += grid[row + i][column + i];              
                    d2 += grid[row + i][column + k - 1 - i];    
                }

                if (d1 !== target || d2 !== target) continue;

                return k;

                }
        }

    }

    return 1;
};