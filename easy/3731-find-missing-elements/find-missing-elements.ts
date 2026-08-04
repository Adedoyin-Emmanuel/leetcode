function findMissingElements(nums: number[]): number[] {
    nums.sort((a, b) => a - b);

    const answer = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = nums[i] + 1; j < nums[i + 1]; j++){
            answer.push(j);
        }
    }

    return answer;
};