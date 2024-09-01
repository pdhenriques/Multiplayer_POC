class Utils {
    static clamp(num: number, min: number, max: number): number {
        return Math.min(Math.max(num,min),max)
    }

    static between(num: number, min: number, max: number): boolean {
        return num >= min && num <= max
    }

    static lerp(start: number, end: number, time: number = 1) {
        return start + (end - start) * time
    }

    static rand(min: number = 0, max: number = 1): number {
        return min + Math.random() * (max - min)
    }
    static randInt(min: number, max: number): number {
        return Math.floor(min + Math.random() * (max - min))
    }

    static capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

}