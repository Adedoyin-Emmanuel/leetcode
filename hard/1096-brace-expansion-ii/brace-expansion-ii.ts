var braceExpansionII = function (expression: string): string[] {
    let idx: number = 0;
    const n: number = expression.length;

    const isLetter = (c: string): boolean => {
        return c >= "a" && c <= "z";
    };

    // item -> letter | { expr }
    const item = (): Set<string> => {
        let ret: Set<string> = new Set();
        if (expression[idx] === "{") {
            idx++;
            ret = expr();
        } else {
            ret = new Set<string>([expression[idx]]);
        }
        idx++;
        return ret;
    };

    // term -> item | item term
    const term = (): Set<string> => {
        // Initialize an empty set and take its Cartesian product with subsequent results
        let ret: Set<string> = new Set([""]);
        // An item starts with { or a lowercase letter; continue matching only when this condition is met
        while (
            idx < n &&
            (expression[idx] === "{" || isLetter(expression[idx]))
        ) {
            const sub: Set<string> = item();
            const tmp: Set<string> = new Set();
            for (const left of ret) {
                for (const right of sub) {
                    tmp.add(left + right);
                }
            }
            ret = tmp;
        }
        return ret;
    };

    // expr -> term | term, expr
    const expr = (): Set<string> => {
        const ret: Set<string> = new Set();
        while (true) {
            // Take the union with the result of term()
            for (const item of term()) {
                ret.add(item);
            }
            // Continue if a comma is matched; otherwise, stop matching
            if (idx < n && expression[idx] === ",") {
                idx++;
                continue;
            } else {
                break;
            }
        }
        return ret;
    };

    const result: string[] = Array.from(expr());
    return result.sort();
};