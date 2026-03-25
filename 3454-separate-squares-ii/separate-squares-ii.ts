function separateSquares(squares: number[][]): number {
    type Event = { y: number; x1: number; x2: number; delta: number };

    const events: Event[] = [];
    const xs: number[] = [];

    for (const [x, y, l] of squares) {
        events.push({ y, x1: x, x2: x + l, delta: 1 });
        events.push({ y: y + l, x1: x, x2: x + l, delta: -1 });
        xs.push(x, x + l);
    }

    xs.sort((a, b) => a - b);
    const xMap = new Map<number, number>();
    let xi = 0;
    for (const x of xs) if (!xMap.has(x)) xMap.set(x, xi++);

    const n = xMap.size - 1;
    const cover = new Array(4 * n).fill(0);
    const length = new Array(4 * n).fill(0);
    const xArr = Array.from(xMap.keys());

    function update(node: number, l: number, r: number, ql: number, qr: number, val: number) {
        if (qr <= l || r <= ql) return;
        if (ql <= l && r <= qr) cover[node] += val;
        else {
            const m = (l + r) >> 1;
            update(node << 1, l, m, ql, qr, val);
            update(node << 1 | 1, m, r, ql, qr, val);
        }
        if (cover[node] > 0) length[node] = xArr[r] - xArr[l];
        else if (l + 1 === r) length[node] = 0;
        else length[node] = length[node << 1] + length[node << 1 | 1];
    }

    events.sort((a, b) => a.y - b.y);

    let totalArea = 0;
    let prevY = events[0].y;
    for (const e of events) {
        totalArea += length[1] * (e.y - prevY);
        const l = xMap.get(e.x1)!, r = xMap.get(e.x2)!;
        update(1, 0, n, l, r, e.delta);
        prevY = e.y;
    }

    const halfArea = totalArea / 2;
    cover.fill(0);
    length.fill(0);
    prevY = events[0].y;
    let areaSoFar = 0;

    for (const e of events) {
        const dy = e.y - prevY;
        if (length[1] > 0 && areaSoFar + length[1] * dy >= halfArea) {
            return prevY + (halfArea - areaSoFar) / length[1];
        }
        areaSoFar += length[1] * dy;
        const l = xMap.get(e.x1)!, r = xMap.get(e.x2)!;
        update(1, 0, n, l, r, e.delta);
        prevY = e.y;
    }

    return prevY;
}

