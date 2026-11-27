function maximumSaleItems(items: number[][], budget: number): number {
    const f = new Int32Array(budget + 1);
    let mn = Infinity;
    for (const [factor, price] of items) {
        mn = Math.min(mn, price);
        let cnt = 0;
        for (const [otherFactor] of items) {
            if (otherFactor % factor === 0) {
                cnt++;
            }
        }
        for (let j = budget; j >= price; j--) {
            f[j] = Math.max(f[j], f[j - price] + cnt);
        }
    }
    let ans = 0;
    for (let j = 0; j <= budget; j++) {
        ans = Math.max(ans, f[j] + Math.floor((budget - j) / mn));
    }
    return ans;
}