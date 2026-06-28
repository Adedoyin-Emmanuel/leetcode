function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a, b) => a - b);

    let result = 1;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] >= result + 1){
            result += 1;
        }
    }

    return result;
};