// Last updated: 1/18/2026, 11:56:12 PM
// Bro what??? this has to be the most complicated solution ever, walahi I thought this thing was simple.
1function largestMagicSquare(grid: number[][]): number {
2    /**
3        This is looking fairly simple than other square problems 
4        I"ve solved recently. I think throughout this week was 
5        square questions. I wonder what next week holds.
6     */
7
8     const m = grid.length, n = grid[0].length;
9
10     const rowPrefix = Array.from({length: m}, () => Array(n).fill(0));
11     const colPrefix = Array.from({length: m}, () => Array(n).fill(0));
12
13    //we fill the row then column prefixes
14    for(let row = 0; row < m; row++){
15        for(let column = 0; column < n; column++){
16            rowPrefix[row][column] = grid[row][column] + (column > 0 ? rowPrefix[row][column - 1]: 0);
17        }
18    }
19
20    for(let column = 0; column < n; column++){
21        for(let row = 0; row < m; row++){
22            colPrefix[row][column] = grid[row][column] + (row > 0 ? colPrefix[row - 1][column] : 0);
23        }
24    }
25
26    const maxSize = Math.min(m, n);
27
28    for(let k = maxSize; k >= 2; k--){
29        for(let row = 0; row + k <= m; row++){
30            for(let column = 0; column + k <= n; column++){
31                const target = rowPrefix[row][column + k - 1] - (column > 0 ? rowPrefix[row][column - 1] : 0);
32
33                let valid = true;
34
35                for(let i = 0; i < k; i++){
36                    const rowSum = rowPrefix[row + i][column + k - 1] - (column > 0 ? rowPrefix[row + i][column - 1] : 0);
37
38                    if(rowSum !== target){
39                        valid = false;
40                        break;
41                    }
42                }
43
44                if(!valid) continue;
45
46                for (let j = 0; j < k; j++) {
47                    const colSum =
48                        colPrefix[row + k - 1][column + j] -
49                        (row > 0 ? colPrefix[row - 1][column + j] : 0);
50
51                    if (colSum !== target) {
52                        valid = false;
53                        break;
54                    }
55                }
56
57                if (!valid) continue;
58
59                let d1 = 0, d2 = 0;
60
61                for (let i = 0; i < k; i++) {
62                    d1 += grid[row + i][column + i];              
63                    d2 += grid[row + i][column + k - 1 - i];    
64                }
65
66                if (d1 !== target || d2 !== target) continue;
67
68                return k;
69
70                }
71        }
72
73    }
74
75    return 1;
76};