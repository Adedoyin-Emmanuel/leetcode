function angleClock(hour: number, minutes: number): number {
    const result = hour + minutes / 60;
    const diff = (11 * result) % 12;

    return Math.min(diff, 12 - diff) * 30;
};