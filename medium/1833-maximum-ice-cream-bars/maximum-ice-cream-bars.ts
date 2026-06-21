function maxIceCream(costs: number[], coins: number): number {
    const maxCost = Math.max(...costs);
    const freq: number[] = Array(maxCost + 1).fill(0);
    for (const cost of costs) {
        freq[cost]++;
    }

    let result = 0;

    for (let cost = 1; cost <= maxCost; cost++) {
        if (freq[cost] === 0)
            continue;
        const canBuy = Math.min(freq[cost], Math.floor(coins / cost));
        result += canBuy;
        coins -= canBuy * cost;

        if (coins < cost)
            break;

    }

    return result;
};