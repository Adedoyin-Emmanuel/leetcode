function evaluate(s: string, knowledge: string[][]): string {
      const dict = new Map();
    for (const kd of knowledge) {
        dict.set(kd[0], kd[1]);
    }
    let addKey = false;
    let key = "";
    let res = "";
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "(") {
            addKey = true;
        } else if (c === ")") {
            if (dict.has(key)) {
                res += dict.get(key);
            } else {
                res += "?";
            }
            addKey = false;
            key = "";
        } else if (addKey) {
            key += c;
        } else {
            res += c;
        }
    }
    return res;
};