function distance(ux, uy, vx, vy) {
    return (ux - vx) ** 2 + (uy - vy) ** 2;
}

function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {
    if (x1 <= xCenter && xCenter <= x2 && y1 <= yCenter && yCenter <= y2) {
        return true;
    }
    if (
        x1 <= xCenter &&
        xCenter <= x2 &&
        y2 <= yCenter &&
        yCenter <= y2 + radius
    ) {
        return true;
    }
    if (
        x1 <= xCenter &&
        xCenter <= x2 &&
        y1 - radius <= yCenter &&
        yCenter <= y1
    ) {
        return true;
    }
    if (
        x1 - radius <= xCenter &&
        xCenter <= x1 &&
        y1 <= yCenter &&
        yCenter <= y2
    ) {
        return true;
    }
    if (
        x2 <= xCenter &&
        xCenter <= x2 + radius &&
        y1 <= yCenter &&
        yCenter <= y2
    ) {
        return true;
    }
    if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
        return true;
    }
    if (distance(xCenter, yCenter, x1, y1) <= radius * radius) {
        return true;
    }
    if (distance(xCenter, yCenter, x2, y2) <= radius * radius) {
        return true;
    }
    if (distance(xCenter, yCenter, x2, y1) <= radius * radius) {
        return true;
    }
    return false;
};