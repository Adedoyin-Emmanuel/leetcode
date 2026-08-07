function smallestNumber(num: string, t: number): string {
    let temp: number = t;
    for (let i: number = 2; i <= 9; i++) {
        while (temp % i === 0) {
            temp /= i;
        }
    }
    if (temp > 1) {
        return "-1";
    }

    const n: number = num.length;
    const rem: number[] = new Array(n + 1);
    rem[0] = t;
    let pos: number = n - 1;

    const numArr: string[] = num.split("");
    for (let i: number = 0; i < n; i++) {
        if (numArr[i] === "0") {
            pos = i;
            break;
        }
        rem[i + 1] = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
    }

    if (rem[n] === 1) {
        return num;
    }

    for (let i: number = pos; i >= 0; i--) {
        while (true) {
            numArr[i] = String.fromCharCode(numArr[i].charCodeAt(0) + 1);
            if (numArr[i] > "9") {
                break;
            }

            let tNow: number = Math.floor(
                rem[i] / gcd(rem[i], parseInt(numArr[i])),
            );
            let k: number = 9;

            for (let j: number = n - 1; j > i; j--) {
                while (tNow % k !== 0) {
                    k--;
                }
                tNow = Math.floor(tNow / k);
                numArr[j] = String.fromCharCode("0".charCodeAt(0) + k);
            }

            if (tNow === 1) {
                return numArr.join("");
            }
        }
    }

    let ans: string[] = [];
    let originalT: number = t;
    for (let i: number = 9; i > 1; i--) {
        while (originalT % i === 0) {
            ans.push(String.fromCharCode("0".charCodeAt(0) + i));
            originalT = Math.floor(originalT / i);
        }
    }

    const padding: number = Math.max(n + 1 - ans.length, 0);
    for (let i: number = 0; i < padding; i++) {
        ans.push("1");
    }

    return ans.reverse().join("");
}

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp: number = b;
        b = a % b;
        a = temp;
    }
    return a;
}