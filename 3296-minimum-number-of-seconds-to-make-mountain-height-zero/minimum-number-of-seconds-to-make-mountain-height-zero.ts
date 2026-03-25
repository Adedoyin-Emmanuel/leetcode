const EPS: number = 1e-7;

function minNumberOfSeconds(
    mountainHeight: number,
    workerTimes: number[],
): number {
    const maxWorkerTimes: number = Math.max(...workerTimes);
    let l: number = 1;
    let r: number =
        (maxWorkerTimes * mountainHeight * (mountainHeight + 1)) / 2;
    let ans: number = 0;

    while (l <= r) {
        const mid: number = Math.floor((l + r) / 2);
        let cnt: number = 0;
        for (const t of workerTimes) {
            const work: number = Math.floor(mid / t);
            const k: number = Math.floor(
                (-1.0 + Math.sqrt(1 + work * 8)) / 2 + EPS,
            );
            cnt += k;
        }

        if (cnt >= mountainHeight) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
}