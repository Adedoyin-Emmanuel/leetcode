// Last updated: 2/1/2026, 8:00:51 AM
1function plusOne(digits: number[]): number[] {
2    /**
3        Omor let me try this thing jama jama
4
5        Bro, see wetin my mates dey solve in one minute dey take me almost 1hr. Jesus.
6
7
8     */
9
10
11    let carry = 1;
12
13    for (let i = digits.length - 1; i >= 0; i--) {
14        const sum = digits[i] + carry;
15        const lastElementIndex = digits.length - 1;
16
17        if (digits[i] < 9) {
18            carry = 0;
19            digits[i] += 1;
20            break;
21        }
22
23        digits[i] = sum % 10;
24        carry = Math.floor(sum / 10);
25    }
26
27    if (carry) {
28        digits.unshift(1);
29    }
30
31    return digits;
32};