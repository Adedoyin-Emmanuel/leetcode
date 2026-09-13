function largestOverlap(img1: number[][], img2: number[][]): number {
    const n = img1.length;
    let result = 0;

    for (let dx = -n + 1; dx < n; dx++) {
        for (let dy = -n + 1; dy < n; dy++) {
            let score = 0;

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    const newI = i + dx;
                    const newJ = j + dy;

                    if (
                        0 <= newI && newI < n &&
                        0 <= newJ && newJ < n
                    ) {
                        score += img1[newI][newJ] & img2[i][j];
                    }
                }
            }

            result = Math.max(result, score);
        }
    }

    return result;
};