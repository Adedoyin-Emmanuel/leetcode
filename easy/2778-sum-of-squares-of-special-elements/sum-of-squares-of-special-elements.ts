function sumOfSquares(nums: number[]): number {
    let answer = 0;
    let n = nums.length;

    for(let i = 0; i < nums.length; i++){
        let index = i + 1;
        if( (n % index) == 0){
            answer += (nums[i] * nums[i]);
        }
    }

    return answer;
};