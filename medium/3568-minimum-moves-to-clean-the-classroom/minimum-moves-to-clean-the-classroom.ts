function minMoves(classroom: string[], energy: number): number {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const m = classroom.length;
    const n = classroom[0].length;
    const id: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    let sx = 0,
        sy = 0,
        cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = classroom[i][j];
            if (c === "S") {
                sx = i;
                sy = j;
            } else if (c === "L") {
                id[i][j] = 1 << cnt;
                cnt++;
            }
        }
    }
    const full = 1 << cnt;
    const bestEnergy = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(full).fill(-1)),
    );
    bestEnergy[sx][sy][0] = energy;
    const q: {
        x: number;
        y: number;
        mask: number;
        e: number;
        steps: number;
    }[] = [];
    q.push({ x: sx, y: sy, mask: 0, e: energy, steps: 0 });
    let head = 0;
    while (head < q.length) {
        const t = q[head++];
        if (t.mask === full - 1) {
            return t.steps;
        }
        if (t.e === 0) {
            continue;
        }
        for (let d = 0; d < 4; d++) {
            const nx = t.x + dx[d];
            const ny = t.y + dy[d];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                continue;
            }
            const c = classroom[nx][ny];
            if (c === "X") {
                continue;
            }
            const ne = c === "R" ? energy : t.e - 1;
            const nmask = t.mask | id[nx][ny];
            if (ne > bestEnergy[nx][ny][nmask]) {
                bestEnergy[nx][ny][nmask] = ne;
                q.push({
                    x: nx,
                    y: ny,
                    mask: nmask,
                    e: ne,
                    steps: t.steps + 1,
                });
            }
        }
    }
    return -1;
}