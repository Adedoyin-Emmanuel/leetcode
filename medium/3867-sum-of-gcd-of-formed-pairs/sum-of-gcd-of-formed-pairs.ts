function gcdSum(nums: number[]): number {
    const n: number = nums.length;
    const mx: number[] = new Array(n);
    let prefixMax: number = -Infinity;
    for (let i: number = 0; i < n; i++) {
        prefixMax = Math.max(prefixMax, nums[i]);
        mx[i] = prefixMax;
    }

    const prefixGcd: number[] = new Array(n);
    for (let i: number = 0; i < n; i++) {
        prefixGcd[i] = gcd(nums[i], mx[i]);
    }

    prefixGcd.sort((a, b) => a - b);
    let ans: number = 0;
    let left: number = 0,
        right: number = n - 1;
    while (left < right) {
        ans += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }
    return ans;
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}