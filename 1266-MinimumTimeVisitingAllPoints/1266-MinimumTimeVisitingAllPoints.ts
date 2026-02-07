// Last updated: 2/7/2026, 4:49:45 PM
1function isTrionic(nums: number[]): boolean {
2    let index = 0;
3    let peak = 0;
4    let valley = 0;
5    const end = nums.length - 1;
6
7    while (nums[index] < nums[index + 1]) {
8        index += 1;
9    }
10
11    if (index === 0 || index === end) return false;
12
13    peak = index;
14
15    while (nums[index] > nums[index + 1]) {
16        index += 1;
17    }
18    if (index === peak || index === end) return false;
19    
20    valley = index;
21
22    while (nums[index] < nums[index + 1]) {
23        index += 1;
24    }
25
26    return index == end;
27};