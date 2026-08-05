function remainingMethods(
    n: number,
    k: number,
    invocations: number[][],
): number[] {
    const edges = Array.from({ length: n }, () => [] as number[]);
    const inDegree = new Array<number>(n).fill(0);

    for (const [u, v] of invocations) {
        edges[u].push(v);
        inDegree[v]++;
    }

    const queue = new Queue<number>([k]);
    const suspicious = new Array<boolean>(n).fill(false);
    suspicious[k] = true;

    while (!queue.isEmpty()) {
        const u = queue.pop();
        for (const v of edges[u]) {
            inDegree[v]--;

            if (!suspicious[v]) {
                queue.push(v);
                suspicious[v] = true;
            }
        }
    }

    let canRemoveAll = true;
    const remaining: number[] = [];

    for (let i = 0; i < n; i++) {
        if (suspicious[i] === true && inDegree[i] > 0) {
            canRemoveAll = false;
            break;
        } else if (suspicious[i] === false) {
            remaining.push(i);
        }
    }

    if (!canRemoveAll) {
        return Array.from({ length: n }, (_, i) => i);
    }

    return remaining;
}