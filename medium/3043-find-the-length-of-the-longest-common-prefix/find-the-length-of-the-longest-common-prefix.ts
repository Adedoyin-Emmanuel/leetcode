function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    //put all the possible prefixes of each element in arr1 into a Hashset
    let prefixSet = new Set<number>();
    let longestCommonPrefix = 0;

    for(let i = 0; i < arr1.length; i++){
        const stringInput = arr1[i].toString();
         for(let j = 1; j < stringInput.length + 1; j++){
            prefixSet.add(parseInt(stringInput.slice(0, j)));
         }
    }

    //Compute prefix for arr2 and check if it exists in our set
    for(let i = 0; i < arr2.length; i++){
        const stringInput = arr2[i].toString();
        for(let j = 1; j < stringInput.length + 1; j++){
            let prefix = parseInt(stringInput.slice(0, j));

            if(prefixSet.has(prefix)){
                let prefixLength = prefix.toString().length;

                if(prefixLength > longestCommonPrefix){
                    longestCommonPrefix = prefixLength;
                }
            }
        }
    }


    return longestCommonPrefix;
};