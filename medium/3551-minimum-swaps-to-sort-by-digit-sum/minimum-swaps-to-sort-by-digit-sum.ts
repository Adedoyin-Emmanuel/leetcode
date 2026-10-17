function minSwaps(nums: number[]): number {
    const n = nums.length;
    const digitSum: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        let x = nums[i],
            sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        digitSum[i] = sum;
    }

    const indices: number[] = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => {
        if (digitSum[a] !== digitSum[b]) {
            return digitSum[a] - digitSum[b];
        }
        return nums[a] - nums[b];
    });

    const targetPos: number[] = new Array(n);
    for (let pos = 0; pos < n; pos++) {
        targetPos[indices[pos]] = pos;
    }

    const visited: boolean[] = new Array(n).fill(false);
    let cycles = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            cycles++;
            let j = i;
            while (!visited[j]) {
                visited[j] = true;
                j = targetPos[j];
            }
        }
    }

    return n - cycles;
}