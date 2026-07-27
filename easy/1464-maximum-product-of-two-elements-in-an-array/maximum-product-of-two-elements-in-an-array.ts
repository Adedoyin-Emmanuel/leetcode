function maxProduct(nums: number[]): number {
    let answer = 0;

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            answer = Math.max(answer, (nums[i] - 1) * (nums[j] - 1));
        }
    }

    return answer;
};