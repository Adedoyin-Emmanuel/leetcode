function findMaxPathScore(edges: number[][], online: boolean[], k: number): number {
    class MinHeap {
        heap: number[][] = [];

        push(node: number[]): void {
            this.heap.push(node);
            let i = this.heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);

                if (this.heap[p][0] <= this.heap[i][0])
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

                if (l < this.heap.length && this.heap[l][0] < this.heap[best][0])
                    best = l;

                if (r < this.heap.length && this.heap[r][0] < this.heap[best][0])
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

    let maxWeight = 0;
    const graph = new Map<number, number[][]>();

    for (const [fromNode, toNode, weight] of edges) {
        if (!graph.has(fromNode)) {
            graph.set(fromNode, []);
        }

        graph.get(fromNode)!.push([toNode, weight]);
        maxWeight = Math.max(maxWeight, weight);
    }

    const check = (minWeight: number): boolean => {
        const heap = new MinHeap();
        heap.push([0, 0]);

        const bestCost = new Map<number, number>();

        while (heap.size() > 0) {
            const [currentCost, currentNode] = heap.pop();

            if (currentNode === online.length - 1) {
                return true;
            }

            if (bestCost.has(currentNode) && bestCost.get(currentNode)! <= currentCost) {
                continue;
            }

            bestCost.set(currentNode, currentCost);

            for (const [nextNode, edgeWeight] of (graph.get(currentNode) || [])) {
                if (currentCost + edgeWeight > k) {
                    continue;
                }

                if (!online[nextNode]) {
                    continue;
                }

                if (edgeWeight < minWeight) {
                    continue;
                }

                heap.push([currentCost + edgeWeight, nextNode]);
            }
        }

        return false;
    };

    let left = -1;
    let right = maxWeight + 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right >= 0 ? right : -1;
}