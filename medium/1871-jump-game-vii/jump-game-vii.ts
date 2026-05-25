function canReach(s: string, minJump: number, maxJump: number): boolean {
    const DP = Array(s.length).fill(false);
    const n = s.length;

    DP[0] = true;

    let reachableCount = 0;
    let left = 0;

    for (let i = 1; i < n; i++) {

        if (i - minJump >= 0 && DP[i - minJump]) {
            reachableCount++;
        }

        if (i - maxJump - 1 >= 0 && DP[i - maxJump - 1]) {
            reachableCount--;
        }

        if (reachableCount > 0 && s[i] === '0') {
            DP[i] = true;
        }
    }


    return DP[n - 1];
};