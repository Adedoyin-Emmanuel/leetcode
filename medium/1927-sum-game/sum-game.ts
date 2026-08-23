function sumGame(num: string): boolean {
    const n = num.length;

    const get = (s: string): [number, number] => {
        let nn = 0,
            qq = 0;
        for (const ch of s) {
            if (ch === "?") {
                qq++;
            } else {
                nn += parseInt(ch);
            }
        }
        return [nn, qq];
    };

    const [n0, q0] = get(num.substring(0, n / 2));
    const [n1, q1] = get(num.substring(n / 2));

    return (q0 + q1) % 2 === 1 || n0 - n1 !== ((q1 - q0) * 9) / 2;
}