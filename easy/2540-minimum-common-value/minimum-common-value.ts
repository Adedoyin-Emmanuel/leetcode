function getCommon(nums1: number[], nums2: number[]): number {

    let i = 0, j = 0, nums1Length = nums1.length, nums2Length = nums2.length;

    while (i <= nums1Length && j < nums2Length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] == nums2[j]) {
            return nums1[i];
        } else {
            j++;
        }
    }

    return -1;
};