function pathExistenceQueries(n: number, nums: number[], maxDiff: number, queries: number[][]): boolean[] {
    const component: number[] = new Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] <= maxDiff) {
            component[i] = component[i - 1];
        } else {
            component[i] = component[i - 1] + 1;
        }
    }

    const answer: boolean[] = [];
    
    for (const [u, v] of queries) {
        answer.push(component[u] === component[v]);
    }

    return answer;
};