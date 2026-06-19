function largestAltitude(gain: number[]): number {
    let currentAltitude = 0;
    let highestPoint = currentAltitude;

    gain.forEach((g)=>{
        currentAltitude += g;
        highestPoint = Math.max(highestPoint, currentAltitude);
    });

    return highestPoint;
};