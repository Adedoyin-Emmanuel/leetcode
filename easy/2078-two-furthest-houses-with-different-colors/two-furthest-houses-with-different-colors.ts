function maxDistance(colors: number[]): number {

    const i = 0;
    const n = colors.length;
    let anchorLeftDistance = 0;

    for (let j = n - 1; j >= 0; j--) {
        if (colors[j] !== colors[i]) {
            anchorLeftDistance = j - i;
            break;
        }
    }

    const j =  n - 1;
    let anchorRightDistance = 0;

    for(let i = 0; i < n; i++){
        if(colors[i] !== colors[j]){
            anchorRightDistance = j - i;
            break;
        }
    }

    return Math.max(anchorLeftDistance, anchorRightDistance);

};