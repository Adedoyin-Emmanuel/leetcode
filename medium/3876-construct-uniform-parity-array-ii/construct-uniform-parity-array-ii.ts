function uniformArray(nums1: number[]): boolean {
    let mn = nums1[0];
    let hasOdd = false;
    for (const v of nums1) {
        if (v < mn) {
            mn = v;
        }
        if (v & 1) {
            hasOdd = true;
        }
    }
    if (mn & 1) {
        return true;
    }
    return !hasOdd;
}