function stoneGameIX(stones: number[]): boolean {
    let ctn0 = 0, ctn1 = 0, ctn2 = 0;

    for(const stone of stones){
        const type = stone % 3;

        if(type === 0){
            ctn0++;
        }else if(type === 1){
            ctn1++;
        }else{
            ctn2++;
        }
    }

    if(ctn0 % 2 === 0){
        return ctn1 >= 1 && ctn2 >= 1;
    }

    return ctn1 - ctn2 > 2 || ctn2 - ctn1 > 2; 
};