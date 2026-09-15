function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    if (rec1[2] <= rec2[0] || rec1[3] <= rec2[1]) return false;
    if (rec2[2] <= rec1[0] || rec2[3] <= rec1[1]) return false;
    
    return true;
};