// Last updated: 1/27/2026, 11:46:15 PM
1function minCost(n: number, edges: number[][]): number {
2    class MinHeap {
3    heap: [number, number][] = [];
4    push(val: [number, number]) {
5        this.heap.push(val);
6        let i = this.heap.length - 1;
7        while (i > 0) {
8            const p = Math.floor((i - 1) / 2);
9            if (this.heap[i][0] >= this.heap[p][0]) break;
10            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
11            i = p;
12        }
13    }
14    pop(): [number, number] | undefined {
15        if (this.heap.length === 0) return undefined;
16        const top = this.heap[0];
17        const end = this.heap.pop()!;
18        if (this.heap.length === 0) return top;
19        this.heap[0] = end;
20        let i = 0;
21        const n = this.heap.length;
22        while (true) {
23            let left = 2 * i + 1;
24            let right = 2 * i + 2;
25            let smallest = i;
26            if (left < n && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
27            if (right < n && this.heap[right][0] < this.heap[smallest][0]) smallest = right;
28            if (smallest === i) break;
29            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
30            i = smallest;
31        }
32        return top;
33    }
34    size() {
35        return this.heap.length;
36    }
37}
38
39      const graph: [number, number][][] = Array.from({ length: n }, () => []);
40
41    for (const [u, v, w] of edges) {
42        graph[u].push([v, w]);
43        graph[v].push([u, 2 * w]);
44    }
45
46    const dist: number[] = Array(n).fill(Infinity);
47    dist[0] = 0;
48
49    const visited: boolean[] = Array(n).fill(false);
50    const heap = new MinHeap();
51    heap.push([0, 0]); // [cost, node]
52
53    while (heap.size()) {
54        const [cost, node] = heap.pop()!;
55        if (node === n - 1) return cost;
56        if (visited[node]) continue;
57        visited[node] = true;
58
59        for (const [nei, w] of graph[node]) {
60            const newDist = cost + w;
61            if (newDist < dist[nei]) {
62                dist[nei] = newDist;
63                heap.push([newDist, nei]);
64            }
65        }
66    }
67
68    return -1;
69}
70