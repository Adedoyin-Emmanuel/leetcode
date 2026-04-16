function solveQueries(nums: number[], queries: number[]): number[] {
    const n = nums.length;
    const numsPos = new Map<number, number[]>();

    for (let i = 0; i < n; i++) {
        if (!numsPos.has(nums[i])) {
            numsPos.set(nums[i], []);
        }
        numsPos.get(nums[i])!.push(i);
    }

    for (const [key, pos] of numsPos) {
        const x = pos[0];
        pos.unshift(pos[pos.length - 1] - n);
        pos.push(x + n);
    }

    for (let i = 0; i < queries.length; i++) {
        const x = nums[queries[i]];
        const posList = numsPos.get(x)!;
        if (posList.length === 3) {
            queries[i] = -1;
            continue;
        }
        const pos = binarySearch(posList, queries[i]);
        queries[i] = Math.min(
            posList[pos + 1] - posList[pos],
            posList[pos] - posList[pos - 1],
        );
    }

    return queries;
}

function binarySearch(arr: number[], target: number): number {
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
}