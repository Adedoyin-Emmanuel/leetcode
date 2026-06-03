function solve(start1, duration1, start2, duration2) {
    let finish1 = Infinity;
    for (let i = 0; i < start1.length; i++) {
        finish1 = Math.min(finish1, start1[i] + duration1[i]);
    }
    let finish2 = Infinity;
    for (let i = 0; i < start2.length; i++) {
        finish2 = Math.min(
            finish2,
            Math.max(start2[i], finish1) + duration2[i],
        );
    }
    return finish2;
}

function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[],
): number {
    let land_water = solve(
        landStartTime,
        landDuration,
        waterStartTime,
        waterDuration,
    );
    let water_land = solve(
        waterStartTime,
        waterDuration,
        landStartTime,
        landDuration,
    );
    return Math.min(land_water, water_land);
}