// Last updated: 1/26/2026, 10:47:42 AM
1function maximalRectangle(matrix: string[][]): number {
2    /**
3        I shouted blood of Jesus whn I first saw this lmao.
4
5        But then, let me try to understand what the problem means.
6
7        I haven't understood what the question is all about but the pattern is familar.
8        This problem requires dynamic programming.
9
10        If we understand it well, this can straight up go from hard to easy.
11
12        First things first, let's better understand the question.
13
14        The question requires me to somehow scan through a 2D array and find the largest rectangle
15        containing 1's. 
16
17        Now, let's see if we were given a hint. Oh boy, no hint. That's sad. But then.
18     */
19
20    const cols = matrix[0].length;
21    const DP = new Array(cols).fill(0);
22    let maxRectangleArea = 0;
23
24    for (let i = 0; i < matrix.length; i++) {
25        const stack: number[] = [];
26        for (let j = 0; j <= cols; j++) {
27            // Current height: if j == cols, we treat as 0 to flush stack at the end
28            const currHeight = j < cols ? (matrix[i][j] === "1" ? DP[j] + 1 : 0) : 0;
29            if (j < cols) DP[j] = currHeight;
30
31            while (stack.length > 0 && currHeight < DP[stack[stack.length - 1]]) {
32                const poppedIndex = stack.pop()!;
33                const height = DP[poppedIndex];
34                const leftBoundary = stack.length > 0 ? stack[stack.length - 1] : -1;
35                const width = j - leftBoundary - 1;
36                const area = height * width;
37                if (area > maxRectangleArea) maxRectangleArea = area;
38            }
39
40            stack.push(j);
41        }
42    }
43
44    return maxRectangleArea;
45};