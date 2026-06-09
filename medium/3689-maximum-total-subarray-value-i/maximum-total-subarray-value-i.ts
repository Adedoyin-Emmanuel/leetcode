function maxTotalValue(nums: number[], k: number): number {
    let m1 = Infinity, m2 = -Infinity;

    for(const x of nums){
        m1 = Math.min(m1, x);
        m2 = Math.max(m2, x);
    }

    return (m2 - m1) * k;
};