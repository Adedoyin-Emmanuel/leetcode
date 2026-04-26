function maxDistance(side: number, points: number[][], k: number): number {
    const arr: number[] = [];

    for (const [x, y] of points) {
        if (x === 0) {
            arr.push(y);
        } else if (y === side) {
            arr.push(side + x);
        } else if (x === side) {
            arr.push(side * 3 - y);
        } else {
            arr.push(side * 4 - x);
        }
    }

    arr.sort((a, b) => a - b);

    const lowerBound = (target: number): number => {
        let left = 0,
            right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    };

    const check = (limit: number): boolean => {
        const perimeter = side * 4;
        for (const start of arr) {
            const end = start + perimeter - limit;
            let cur = start;
            for (let i = 0; i < k - 1; i++) {
                const idx = lowerBound(cur + limit);
                if (idx === arr.length || arr[idx] > end) {
                    cur = -1;
                    break;
                }
                cur = arr[idx];
            }
            if (cur >= 0) return true;
        }
        return false;
    };

    let lo = 1,
        hi = side;
    let ans = 0;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (check(mid)) {
            lo = mid + 1;
            ans = mid;
        } else {
            hi = mid - 1;
        }
    }

    return ans;
}