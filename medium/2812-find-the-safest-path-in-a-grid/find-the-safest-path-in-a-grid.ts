function maximumSafenessFactor(grid: number[][]): number {
    class MaxHeap {
        heap: number[][] = [];

        push(node: number[]): void {
            this.heap.push(node);
            let i = this.heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);

                if (this.heap[p][0] >= this.heap[i][0])
                    break;

                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }

        pop(): number[] {
            if (this.heap.length === 1)
                return this.heap.pop()!;

            const top = this.heap[0];
            this.heap[0] = this.heap.pop()!;

            let i = 0;

            while (true) {
                let l = i * 2 + 1;
                let r = i * 2 + 2;
                let best = i;

                if (l < this.heap.length && this.heap[l][0] > this.heap[best][0])
                    best = l;

                if (r < this.heap.length && this.heap[r][0] > this.heap[best][0])
                    best = r;

                if (best === i)
                    break;

                [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
                i = best;
            }

            return top;
        }

        size(): number {
            return this.heap.length;
        }
    }

    const n = grid.length;

    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1)
        return 0;

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    const q: number[][] = [];
    let head = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                q.push([r, c]);
            }
        }
    }

    while (head < q.length) {
        const [r, c] = q[head++];

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }

    const seen = Array.from({ length: n }, () => Array(n).fill(false));
    const heap = new MaxHeap();

    heap.push([dist[0][0], 0, 0]);

    while (heap.size() > 0) {
        const [safe, r, c] = heap.pop();

        if (seen[r][c])
            continue;

        seen[r][c] = true;

        if (r === n - 1 && c === n - 1)
            return safe;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && !seen[nr][nc]) {
                const newSafe = Math.min(safe, dist[nr][nc]);
                heap.push([newSafe, nr, nc]);
            }
        }
    }

    return -1;
}