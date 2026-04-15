function closestTarget(
    words: string[],
    target: string,
    startIndex: number,
): number {
    let ans = words.length;
    const n = words.length;

    for (let i = 0; i < n; ++i) {
        if (words[i] === target) {
            const dist = Math.abs(i - startIndex);
            ans = Math.min(ans, Math.min(dist, n - dist));
        }
    }

    return ans < n ? ans : -1;
}