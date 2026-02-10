function minCost(n: number, edges: number[][]): number {
    class MinHeap {
    heap: [number, number][] = [];
    push(val: [number, number]) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[i][0] >= this.heap[p][0]) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }
    pop(): [number, number] | undefined {
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length === 0) return top;
        this.heap[0] = end;
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < n && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
            if (right < n && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return top;
    }
    size() {
        return this.heap.length;
    }
}

      const graph: [number, number][][] = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, 2 * w]);
    }

    const dist: number[] = Array(n).fill(Infinity);
    dist[0] = 0;

    const visited: boolean[] = Array(n).fill(false);
    const heap = new MinHeap();
    heap.push([0, 0]); // [cost, node]

    while (heap.size()) {
        const [cost, node] = heap.pop()!;
        if (node === n - 1) return cost;
        if (visited[node]) continue;
        visited[node] = true;

        for (const [nei, w] of graph[node]) {
            const newDist = cost + w;
            if (newDist < dist[nei]) {
                dist[nei] = newDist;
                heap.push([newDist, nei]);
            }
        }
    }

    return -1;
}
