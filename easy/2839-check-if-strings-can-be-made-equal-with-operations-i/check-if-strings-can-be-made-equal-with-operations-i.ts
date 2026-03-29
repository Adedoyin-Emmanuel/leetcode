function canBeEqual(s1: string, s2: string): boolean {
    const even1 = [s1[0], s1[2]].sort().join('');
    const even2 = [s2[0], s2[2]].sort().join('');

    const odd1 = [s1[1], s1[3]].sort().join('');
    const odd2 = [s2[1], s2[3]].sort().join('');

    return even1 === even2 && odd1 === odd2;
};