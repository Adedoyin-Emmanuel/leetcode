function removeCoveredIntervals(intervals: number[][]): number {
    const stack: number[][] = [];

    intervals.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });

    stack.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        const [a, b] = intervals[i];
        const [x, y] = stack[stack.length - 1];

        if (x <= a && b <= y) continue;

        stack.push(intervals[i]);
    }

    return stack.length;
};