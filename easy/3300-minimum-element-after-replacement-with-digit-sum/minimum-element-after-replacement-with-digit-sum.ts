function minElement(nums: number[]): number {
    //following the hint
    //convert to string
    //calculate the sum for each element

    let lowest = Infinity;

    for(let i = 0; i < nums.length; i++){
        const sum = nums[i].toString().split("").reduce((acc, current)=> acc += Number(current), 0);


        if(sum < lowest){
            lowest = sum;
        }
    }

    return lowest;
};