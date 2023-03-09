export function formatNumber(int: number): string {
    if (int < 10) return "0" + int.toString();
    return int.toString();
}