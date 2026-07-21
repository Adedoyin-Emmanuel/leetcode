function maxActiveSectionsAfterTrade(s: string): number {
    const n = s.length;
    let cnt1 = 0;
    for (const c of s) {
        if (c === "1") cnt1++;
    }

    const zeroBlocks: number[] = [];
    let i = 0;
    while (i < n) {
        const start = i;
        while (i < n && s[i] === s[start]) {
            i++;
        }
        if (s[start] === "0") {
            zeroBlocks.push(i - start);
        }
    }

    const m = zeroBlocks.length;
    if (m < 2) {
        return cnt1;
    }

    let bestGain = 0; // Optimal Increment
    for (let j = 0; j < m - 1; j++) {
        bestGain = Math.max(bestGain, zeroBlocks[j] + zeroBlocks[j + 1]);
    }

    return cnt1 + bestGain;
}