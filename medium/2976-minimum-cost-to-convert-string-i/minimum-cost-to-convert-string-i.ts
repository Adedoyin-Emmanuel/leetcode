function minimumCost(
    source: string,
    target: string,
    original: string[],
    changed: string[],
    cost: number[]
): number {
    const INF = Number.MAX_SAFE_INTEGER;
    const n = 26;

    // Initialize distance matrix
    const dist: number[][] = Array.from({ length: n }, () =>
        Array(n).fill(INF)
    );

    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    //  Fill direct transformations
    for (let i = 0; i < original.length; i++) {
        const u = original[i].charCodeAt(0) - 97;
        const v = changed[i].charCodeAt(0) - 97;
        dist[u][v] = Math.min(dist[u][v], cost[i]);
    }

    //  Floyd–Warshall
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let total = 0;

    for (let i = 0; i < source.length; i++) {
        const s = source.charCodeAt(i) - 97;
        const t = target.charCodeAt(i) - 97;

        if (dist[s][t] === INF) return -1;
        total += dist[s][t];
    }

    return total;
}
