function maximumSaleItems(items: number[][], budget: number): number {
    items.sort((a, b) => a[1] - b[1]);
    let mx = 0;
    for (const [factor] of items) {
        mx = Math.max(mx, factor);
    }
    const freq = new Int32Array(mx + 1);
    for (const [factor] of items) {
        freq[factor]++;
    }
    for (let i = 1; i <= mx; i++) {
        if (freq[i] > 0) {
            for (let j = i * 2; j <= mx; j += i) {
                freq[i] += freq[j];
            }
        }
    }

    const mn = items[0][1];
    let ans = 0;
    for (const [factor, price] of items) {
        if (price > mn * 2) {
            break;
        }
        const cnt = freq[factor] - 1;
        const take = Math.min(cnt, Math.floor(budget / price));
        ans += take * 2;
        budget -= take * price;
    }
    ans += Math.floor(budget / mn);
    return ans;
}