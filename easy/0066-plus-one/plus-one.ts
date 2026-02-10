function plusOne(digits: number[]): number[] {
    /**
        Omor let me try this thing jama jama

        Bro, see wetin my mates dey solve in one minute dey take me almost 1hr. Jesus.


     */


    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        const lastElementIndex = digits.length - 1;

        if (digits[i] < 9) {
            carry = 0;
            digits[i] += 1;
            break;
        }

        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }

    if (carry) {
        digits.unshift(1);
    }

    return digits;
};