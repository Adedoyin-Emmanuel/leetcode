// Last updated: 2/1/2026, 8:42:50 PM
function maximalRectangle(matrix: string[][]): number {
    /**
        I shouted blood of Jesus whn I first saw this lmao.

        But then, let me try to understand what the problem means.

        I haven't understood what the question is all about but the pattern is familar.
        This problem requires dynamic programming.

        If we understand it well, this can straight up go from hard to easy.

        First things first, let's better understand the question.

        The question requires me to somehow scan through a 2D array and find the largest rectangle
        containing 1's. 

        Now, let's see if we were given a hint. Oh boy, no hint. That's sad. But then.
     */

    const cols = matrix[0].length;
    const DP = new Array(cols).fill(0);
    let maxRectangleArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        const stack: number[] = [];
        for (let j = 0; j <= cols; j++) {
            // Current height: if j == cols, we treat as 0 to flush stack at the end
            const currHeight = j < cols ? (matrix[i][j] === "1" ? DP[j] + 1 : 0) : 0;
            if (j < cols) DP[j] = currHeight;

            while (stack.length > 0 && currHeight < DP[stack[stack.length - 1]]) {
                const poppedIndex = stack.pop()!;
                const height = DP[poppedIndex];
                const leftBoundary = stack.length > 0 ? stack[stack.length - 1] : -1;
                const width = j - leftBoundary - 1;
                const area = height * width;
                if (area > maxRectangleArea) maxRectangleArea = area;
            }

            stack.push(j);
        }
    }

    return maxRectangleArea;
};