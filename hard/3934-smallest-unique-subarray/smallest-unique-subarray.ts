function smallestUniqueSubarray(nums: number[]): number {
    const BASE = 911382323;

    const n = nums.length;
    const hash = new Uint32Array(n + 1);
    const powers = new Uint32Array(n + 1);
    powers[0] = 1;

    // Compute prefix hashes and powers of BASE
    for (let i = 0; i < n; ++i) {
        hash[i + 1] = (Math.imul(hash[i], BASE) + nums[i]) >>> 0;
        powers[i + 1] = Math.imul(powers[i], BASE) >>> 0;
    }

    const check = (length: number): boolean => {
        const counts = new Map<number, number>();

        for (let left = 0; left + length <= n; ++left) {
            const right = left + length;

            const key =
                (hash[right] - Math.imul(hash[left], powers[length])) >>> 0;
            counts.set(key, (counts.get(key) ?? 0) + 1);
        }

        for (const times of counts.values()) {
            if (times === 1) {
                return true;
            }
        }
        return false;
    };

    let lo = 1,
        hi = n;
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);

        if (check(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
}