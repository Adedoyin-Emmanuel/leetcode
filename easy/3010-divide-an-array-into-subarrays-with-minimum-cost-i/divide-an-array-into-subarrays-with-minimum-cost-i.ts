function minimumCost(nums: number[]): number {
    let firstCost = nums[0];
    let minimumSoFar = nums[1];
    let minimumCost = Infinity;

    for(let i = 2; i < nums.length; i++){
        const candidateCost = firstCost + minimumSoFar + nums[i];

        if(minimumCost > candidateCost){
            minimumCost = candidateCost;
        }

        minimumSoFar = Math.min(minimumSoFar, nums[i]);
    }

    return minimumCost;
};