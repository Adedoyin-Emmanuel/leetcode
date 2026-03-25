function minimumDeleteSum(s1: string, s2: string): number {
    /**
        Okay, this is a DP question it is tricky but then let's see.

        So from what I can understand, the goal of this problem is to
        return the minimum sum to achieve deleting elements from each string until they
        are equal.

        I think we should first create an utility function that converts letters to ASCII.
     */ 

     function convertToASCI(letter: string){
        return letter.charCodeAt(0);
     }

    let DP: number[][] = [];

     //fill the DP array.
    DP = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(0));

    DP[s1.length][s2.length] = 0;

    for(let i = s1.length - 1; i >= 0; i--){
        DP[i][s2.length] = convertToASCI(s1[i]) + DP[i+1][s2.length]

        
        for(let j = s2.length - 1; j >= 0; j--){
            DP[s1.length][j] = convertToASCI(s2[j]) + DP[s1.length][j + 1];

            if(s1[i] === s2[j]){
                DP[i][j] = DP[i + 1][j + 1];
            }else{
                const cost1 = convertToASCI(s1[i]) + DP[i + 1][j];
                const cost2 = convertToASCI(s2[j]) + DP[i][j + 1];

                const minCost = Math.min(cost1, cost2);

                DP[i][j] = minCost;
            }
        }
    }


    return DP[0][0];
};