export class Utils {
    static clamp(num: number, min: number, max: number): number {
        return Math.min(Math.max(num, min), max);
    }

    static toFloat(num: number, precision: number) {
        return Number(num.toFixed(precision))
    }

    static between(num: number, min: number, max: number): boolean {
        return num >= min && num <= max;
    }

    static lerp(start: number, end: number, time: number = 1) {
        return start + (end - start) * time;
    }

    static rand(min: number = 0, max: number = 1): number {
        return min + Math.random() * (max - min);
    }
    static randInt(min: number, max: number): number {
        return Math.floor(min + Math.random() * (max - min));
    }

    static capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    static trimLines(str: string) {
        return str.replace(/\r\n|\n|\r/gm, " ");
    }
    static trimTabs(str: string) {
        return str.replace(/\t/gm, " ");
    }
    static trimDoubleSpaces(str: string) {
        return str.replace(/ +/gm, " ");
    }
    static trimAll(str: string) {
        return Utils.trimDoubleSpaces(Utils.trimTabs(Utils.trimLines(str))).trim()
    }
    static removeSpaces(str: string) {
        return str.replace(/ +/gm, "");
    }
}
