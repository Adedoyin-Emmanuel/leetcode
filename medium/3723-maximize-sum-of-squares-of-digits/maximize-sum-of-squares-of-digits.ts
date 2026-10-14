function maxSumOfSquares(num: number, sum: number): string {
    if (sum > 9 * num) {
        return "";
    }

    const r = sum % 9;
    let ans = "9".repeat(Math.floor(sum / 9));

    if (r > 0) {
        ans += String.fromCharCode("0".charCodeAt(0) + r);
    }

    ans += "0".repeat(num - ans.length);
    
    return ans;
}