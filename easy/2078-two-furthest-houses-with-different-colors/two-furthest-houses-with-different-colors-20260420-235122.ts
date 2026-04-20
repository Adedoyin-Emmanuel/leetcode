function maxDistance(colors: number[]): number {

    const n = colors.length;
    let anchorRightDistance = 0, anchorLeftDistance = 0;

    for (let j = n - 1; j >= 0; j--) {
        if (colors[j] !== colors[0]) {
            anchorLeftDistance = j - 0;
            break;
        }
    }

    for(let i = 0; i < n; i++){
        if(colors[i] !== colors[n - 1]){
            anchorRightDistance = (n - 1) - i;
            break;
        }
    }

    return Math.max(anchorLeftDistance, anchorRightDistance);
};