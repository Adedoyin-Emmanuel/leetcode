function findRotation(mat: number[][], target: number[][]): boolean {
    const n = mat.length;
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < Math.floor(n / 2); i++) {
            for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
                [
                    mat[i][j],
                    mat[n - 1 - j][i],
                    mat[n - 1 - i][n - 1 - j],
                    mat[j][n - 1 - i],
                ] = [
                    mat[n - 1 - j][i],
                    mat[n - 1 - i][n - 1 - j],
                    mat[j][n - 1 - i],
                    mat[i][j],
                ];
            }
        }

        if (isEqual(mat, target)) {
            return true;
        }
    }
    return false;
}

function isEqual(mat: number[][], target: number[][]): boolean {
    const n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] !== target[i][j]) {
                return false;
            }
        }
    }
    return true;
}