function climbStairs(n: number, costs: number[]): number {
    let a = 0, b = 0, c = 0;

    for (let i = 0; i < n; ++i) {
        const nxt = Math.min(a + 9, b + 4, c + 1) + costs[i];

        a = b;
        b = c;
        c = nxt;
    }
    
    return c;
};