function rotateGrid(grid: number[][], k: number): number[][] {
    const m: number = grid.length;
    const n: number = grid[0].length;
    const nlayer: number = Math.min(Math.floor(m / 2), Math.floor(n / 2)); 
    
    for (let layer = 0; layer < nlayer; ++layer) {
        const r: number[] = [];
        const c: number[] = [];
        const val: number[] = []; 
        for (let i = layer; i < m - layer - 1; ++i) {
            r.push(i);
            c.push(layer);
            val.push(grid[i][layer]);
        }
        for (let j = layer; j < n - layer - 1; ++j) {
            r.push(m - layer - 1);
            c.push(j);
            val.push(grid[m - layer - 1][j]);
        }
        for (let i = m - layer - 1; i > layer; --i) {
            // right
            r.push(i);
            c.push(n - layer - 1);
            val.push(grid[i][n - layer - 1]);
        }
        for (let j = n - layer - 1; j > layer; --j) {
            // up
            r.push(layer);
            c.push(j);
            val.push(grid[layer][j]);
        }
        const total: number = val.length; 

        const kk: number = k % total; 
        
        for (let i = 0; i < total; ++i) {
            const idx: number = (i + total - kk) % total; 
            grid[r[i]][c[i]] = val[idx];
        }
    }
    return grid;
}