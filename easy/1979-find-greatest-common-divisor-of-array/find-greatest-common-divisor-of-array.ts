function findGCD(nums: number[]): number {
    let mx = Math.max(...nums);
    let mn = Math.min(...nums);
    return gcd(mx, mn);
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}