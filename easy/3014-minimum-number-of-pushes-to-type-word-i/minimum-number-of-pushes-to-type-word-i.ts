function minimumPushes(word: string): number {
    const n = word.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.floor(i / 8) + 1;
    }
    return ans;
}