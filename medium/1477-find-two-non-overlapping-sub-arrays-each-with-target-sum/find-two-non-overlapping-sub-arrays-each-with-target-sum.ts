function minSumOfLengths(arr: number[], target: number): number {
    const pos = new Map<number, number>([[0, -1]]);
    const n = arr.length;
    let s = 0,
        ans = n + 1,
        minL = n;
    for (let i = 0; i < n; i++) {
        s += arr[i];
        if (pos.has(s - target)) {
            const j = pos.get(s - target)!;
            const length = i - j;
            ans = Math.min(ans, length + (j === -1 ? n : arr[j]));
            minL = Math.min(minL, length);
        }
        arr[i] = minL;
        pos.set(s, i);
    }
    return ans === n + 1 ? -1 : ans;
}