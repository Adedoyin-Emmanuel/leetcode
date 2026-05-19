function intersection(nums1: number[], nums2: number[]): number[] {
    //sort both input arrays
    const sortedNums1 = nums1.sort((a, b) => (a - b));
    const sortedNums2 = nums2.sort((a, b) => (a - b));

    //setup pointers
    let i = 0, j = 0;

    //create result array
    const result = [];


    while(i < sortedNums1.length && j < sortedNums2.length){
        if(sortedNums1[i] < sortedNums2[j]){
            i++;
        }else if(sortedNums1[i] === sortedNums2[j]){
            let nums1Value = sortedNums1[i], nums2Value = sortedNums2[j];

            result.push(sortedNums1[i]);
            
            while(sortedNums1[i] === nums1Value){
                i++;
            }

            while(sortedNums2[j] == nums2Value){
                j++;
            }
        }else{
            j++;
        }
    }

    return result;
    //if it is less than, increase the smaller one

    //if equal to, store and move both

    //if greater than, increase the smaller one
};