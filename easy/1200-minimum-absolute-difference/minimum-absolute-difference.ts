function minimumAbsDifference(arr: number[]): number[][] {
    /**
        Humm, I've noticed a pattern here, I've been solving sorting questions
        recently, and most of them are simple. 

        Now, let's get this. 

        First things first, we need to sort this array, 
        and then get the minimum absolute difference 
     */

     let result = [];
     let minAbsDifference = Infinity;
     const sortedArray = arr.sort((a, b) => a - b);


     for(let i = 0; i < arr.length - 1; i++){
        const currentNumber = sortedArray[i];
        const nextNumber = sortedArray[i + 1];

        const difference = nextNumber - currentNumber;

        if(difference < minAbsDifference){
            result = [];
            minAbsDifference = difference;
            result.push([currentNumber, nextNumber]);
        }else if(difference === minAbsDifference){
            result.push([currentNumber, nextNumber]);
        }

    }

    return result;
};  