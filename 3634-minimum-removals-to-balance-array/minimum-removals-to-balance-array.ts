function minRemoval(nums: number[], k: number): number {
    /**
        An array is considered balanced if the value of its maximum element is 
        at most k times the minimum element.

        I think this is straightforward.
     */


    nums.sort((a, b) => a - b);
    let n = nums.length;
    let i = 0;
    let maxWindow = 0;


    for (let j = 0; j < n; j++) {
        while (nums[j] > k * nums[i]) {
            i++;
        }

        maxWindow = Math.max(maxWindow, j - i + 1);
    }
    
    return n - maxWindow;
};