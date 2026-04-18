function mirrorDistance(n: number): number {
    /**
        I think this is pretty straightfoward.

        The only issue is the simulation part. 

        Sometimes leetcode is weird, it says simulate and then in the editorial,
        they proceed to actually not simulaing lmao.

     */

    function reverse(number) {
        let rev = 0;

        while (number > 0) {
            let lastDigit = number % 10;
            rev = rev * 10 + (lastDigit);

            number = Math.floor(number / 10);
        }

        return rev;
    }

    const result = Math.abs(n - reverse(n));

    return result;
};