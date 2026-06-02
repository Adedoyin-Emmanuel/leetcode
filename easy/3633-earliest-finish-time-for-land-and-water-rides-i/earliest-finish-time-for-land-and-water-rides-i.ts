function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[],
): number {
    let n = landStartTime.length;
    let m = waterStartTime.length;
    let res = Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let land = landStartTime[i] + landDuration[i];
            let land_water =
                Math.max(land, waterStartTime[j]) + waterDuration[j];
            res = Math.min(res, land_water);

            let water = waterStartTime[j] + waterDuration[j];
            let water_land =
                Math.max(water, landStartTime[i]) + landDuration[i];
            res = Math.min(res, water_land);
        }
    }
    return res;
}