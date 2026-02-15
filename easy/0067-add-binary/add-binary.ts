function addBinary(a: string, b: string): string {
    let carry = 0;
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += +a[i--];
        if (j >= 0) sum += +b[j--];

        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }

    return result;
};