function missingMultiple(nums: number[], k: number): number {
    const seen = new Set(nums);

    let result = k;

    while(seen.has(result)){
        result += k;
    }

    return result;
};