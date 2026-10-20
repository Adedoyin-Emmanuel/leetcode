function sortableIntegers(nums: number[]): number {
    const n = nums.length;
    const fac: number[] = [];

    for (let x = 1; x * x <= n; x++) {
        if (n % x === 0) {
            fac.push(x);
            if (n / x !== x) {
                fac.push(n / x);
            }
        }
    }

    const target = [...nums].sort((a, b) => a - b);

    const kmp = (nums1: number[], nums2: number[]): boolean => {
        const n = nums1.length,
            m = nums2.length;
        const pi: number[] = new Array(m).fill(0);
        let j = 0;

        for (let i = 1; i < m; i++) {
            while (j > 0 && nums2[i] !== nums2[j]) {
                j = pi[j - 1];
            }
            if (nums2[i] === nums2[j]) {
                j++;
            }
            pi[i] = j;
        }

        j = 0;
        for (let i = 0; i < n; i++) {
            while (j > 0 && nums1[i] !== nums2[j]) {
                j = pi[j - 1];
            }
            if (nums1[i] === nums2[j]) {
                j++;
            }
            if (j === m) {
                return true;
            }
        }
        return false;
    };

    const check = (nums1: number[], nums2: number[]): boolean => {
        // Check whether cyclic rotations of nums1 can produce nums2
        return kmp([...nums1, ...nums1], nums2);
    };

    let ans = 0;

    for (const d of fac) {
        let allGood = true;
        for (let left = 0; left < n; left += d) {
            const right = left + d - 1;

            if (
                !check(
                    nums.slice(left, right + 1),
                    target.slice(left, right + 1),
                )
            ) {
                allGood = false;
                break;
            }
        }
        if (allGood) {
            ans += d;
        }
    }

    return ans;
}