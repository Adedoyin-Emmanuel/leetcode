function countCommas(n: number): number {
    let p: number = 1000, res: number = 0;
    while (p <= n) {
        res += n - p + 1;
        p *= 1000;
    }
    return res;
}