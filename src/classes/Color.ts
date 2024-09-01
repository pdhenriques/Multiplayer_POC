/*
    Color representations:
        HEX: #RRGGBBAA 00-FF
        RGB: rgba(red 0-255, green 0-255, blue 0-255, alpha 0-1)
        HSL: hsla(hue 0-360, saturation 0-100, lightness 0-100, alpha 0-1)
*/

import { colorNames, NameOfColor } from "./colorNames";

enum ColorModes {
    hex = "#",
    rgb = "r",
    hsl = "g",
}

export class Color {
    //defaults to bright pink
    r: number = 255; // 0 - 255 // red
    g: number = 0; // 0 - 255 // green
    b: number = 255; // 0 - 255 // blue
    h: number = 300; // 0 - 360 // hue
    s: number = 100; // 0 - 100 // saturation
    l: number = 50; // 0 - 100 // lightness
    a: number = 1; // 0 - 1   // alpha

    constructor(colorString?: string) {
        if (colorString) {
            let c;

            // name: "blue"
            if ((c = Color.tryGetHexFromName(colorString))) {
                colorString = c;
            }

            if (colorString[0] === ColorModes.hex) {
                // hex8: "#RRGGBBAA"
                if ((c = colorString.match(/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i))) {
                    this.r = parseInt(c[1], 16);
                    this.g = parseInt(c[2], 16);
                    this.b = parseInt(c[3], 16);
                    this.a = parseInt(c[4], 16) / 255;
                    this.fillHSLfromRGB();
                    return this;
                }
                // hex6: "#RRGGBB"
                if ((c = colorString.match(/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i))) {
                    this.r = parseInt(c[1], 16);
                    this.g = parseInt(c[2], 16);
                    this.b = parseInt(c[3], 16);
                    this.a = 1;
                    this.fillHSLfromRGB();
                    return this;
                }
                // hex4: "#RGBA"
                if ((c = colorString.match(/^#([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})/i))) {
                    this.r = parseInt(c[1] + c[1], 16);
                    this.g = parseInt(c[2] + c[2], 16);
                    this.b = parseInt(c[3] + c[3], 16);
                    this.a = parseInt(c[4] + c[4], 16) / 255;
                    this.fillHSLfromRGB();
                    return this;
                }
                // hex3: "#RGB"
                if ((c = colorString.match(/^#([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})/i))) {
                    this.r = parseInt(c[1] + c[1], 16);
                    this.g = parseInt(c[2] + c[2], 16);
                    this.b = parseInt(c[3] + c[3], 16);
                    this.a = 1;
                    this.fillHSLfromRGB();
                    return this;
                }
            }

            if (colorString[0] === ColorModes.rgb) {
                // rgb: "rgb(0,0,255)"
                if ((c = colorString.match(/rgb\( ?(\d+), ?(\d+), ?(\d+) ?\)/i))) {
                    const r = parseInt(c[1], 10);
                    const g = parseInt(c[2], 10);
                    const b = parseInt(c[3], 10);
                    if (
                        r >= 0 && r <= 255 &&
                        g >= 0 && g <= 255 &&
                        b >= 0 && b <= 255
                    ) {
                        this.r = r;
                        this.g = g;
                        this.b = b;
                        this.fillHSLfromRGB();
                    }
                    return this;
                }
                // rgba - ex: "rgba(0,0,255,1)"
                if ((c = colorString.match(/rgba\( ?(\d+), ?(\d+), ?(\d+), ?(\d+.?\d*) ?\)/i))) {
                    const r = parseInt(c[1], 10);
                    const g = parseInt(c[2], 10);
                    const b = parseInt(c[3], 10);
                    const a = parseFloat(c[4]);
                    if (
                        r >= 0 && r <= 255 &&
                        g >= 0 && g <= 255 &&
                        b >= 0 && b <= 255 &&
                        a >= 0 && a <= 1
                    ) {
                        this.r = r;
                        this.g = g;
                        this.b = b;
                        this.a = a;
                        this.fillHSLfromRGB();
                    }
                    return this;
                }
            }

            if (colorString[0] === ColorModes.hsl) {
                // hsl: "hsl(200,75,50)"
                if ((c = colorString.match(/hsl\( ?(\d+), ?(\d+), ?(\d+) ?\)/i))) {
                    const h = parseInt(c[1], 10);
                    const s = parseInt(c[2], 10);
                    const l = parseInt(c[3], 10);
                    if (
                        h >= 0 && h <= 360 &&
                        s >= 0 && s <= 100 &&
                        l >= 0 && l <= 100
                    ) {
                        this.h = h;
                        this.s = s;
                        this.l = l;
                        this.fillRGBfromHSL();
                    }
                    return this;
                }

                // hsla - ex: "hsla(200,75,50,1)"
                if ((c = colorString.match(/hsla\( ?(\d+), ?(\d+), ?(\d+), ?(\d+.?\d*) ?\)/i))) {
                    const h = parseInt(c[1], 10);
                    const s = parseInt(c[2], 10);
                    const l = parseInt(c[3], 10);
                    const a = parseFloat(c[4]);
                    if (
                        h >= 0 && h <= 360 &&
                        s >= 0 && s <= 100 &&
                        l >= 0 && l <= 100 &&
                        a >= 0 && a <= 1
                    ) {
                        this.h = h;
                        this.s = s;
                        this.l = l;
                        this.a = a;
                        this.fillRGBfromHSL();
                    }
                    return this;
                }
            }
        }

        // if everything fails returns default bright-pink color
    }

    clone(): Color {
        return new Color(`rgba(${this.r},${this.g},${this.b},${this.a})`);
    }

    static createFromRGBA(r: number, g: number, b: number, a: number): Color {
        return new Color(`rgba(${r},${g},${b},${a})`);
    }
    static createFromHSLA(h: number, s: number, l: number, a: number): Color {
        return new Color(`hsla(${h},${s},${l},${a})`);
    }

    static createRandomColor(a: number = 1): Color {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return new Color(`rgba(${r}, ${g}, ${b}, ${a})`);
    }

    static createRandomHue(s: number = 75, l: number = 50, a: number = 1): Color {
        const h = Math.floor(Math.random() * 360);
        return new Color(`hsla(${h}, ${s}%, ${l}%, ${a})`);
    }

    static tryGetHexFromName(colorName: string): string | null {
        return colorNames[colorName.toLowerCase() as NameOfColor] ?? null
    }

    toString(): string {
        return `${this.r},${this.g},${this.b},${this.h},${this.s},${this.l},${this.a}`
    }

    // #00BFFF;
    toHEXString(): string {
        const r = this.r.toString(16).toUpperCase()
        const g = this.g.toString(16).toUpperCase()
        const b = this.b.toString(16).toUpperCase()
        return `#${r}${g}${b}`
    }
    // #00BFFFCC;
    toHEXAString(): string {
        const r = this.r.toString(16).toUpperCase()
        const g = this.g.toString(16).toUpperCase()
        const b = this.b.toString(16).toUpperCase()
        const a = Math.round(this.a * 255).toString(16).toUpperCase()
        return `#${r}${g}${b}${a}`
    }
    // rgb(0, 191, 255);
    toRGBString(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
    // rgba(255, 99, 71, 0.2);
    toRGBAString(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }
    // hsl(170, 50%, 50%);
    toHSLString(): string {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`
    }
    // hsla(120, 100%, 50%, 0.2);
    toHSLAString(): string {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`
    }

    fillRGBfromHSL(): void {
        // converted from https://www.w3schools.com/lib/w3color.js
        let hue = this.h;
        let sat = this.s / 100;
        let light = this.l / 100;
        function hueToRgb(t1: number, t2: number, hue: number) {
            if (hue < 0) hue += 6;
            if (hue >= 6) hue -= 6;
            if (hue < 1) return (t2 - t1) * hue + t1;
            else if (hue < 3) return t2;
            else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
            else return t1;
        }
        var t1, t2;
        hue = hue / 60;
        if (light <= 0.5) {
            t2 = light * (sat + 1);
        } else {
            t2 = light + sat - light * sat;
        }
        t1 = light * 2 - t2;
        this.r = Math.round(hueToRgb(t1, t2, hue + 2) * 255);
        this.g = Math.round(hueToRgb(t1, t2, hue) * 255);
        this.b = Math.round(hueToRgb(t1, t2, hue - 2) * 255);
    }

    fillHSLfromRGB(): void {
        // converted from https://www.w3schools.com/lib/w3color.js
        var min, max, i, l, s, maxcolor, h = 0, rgb = [];
        rgb[0] = this.r / 255;
        rgb[1] = this.g / 255;
        rgb[2] = this.b / 255;
        min = rgb[0];
        max = rgb[0];
        maxcolor = 0;
        for (i = 0; i < rgb.length - 1; i++) {
          if (rgb[i + 1] <= min) {min = rgb[i + 1];}
          if (rgb[i + 1] >= max) {max = rgb[i + 1];maxcolor = i + 1;}
        }
        if (maxcolor == 0) {
          h = (rgb[1] - rgb[2]) / (max - min);
        }
        if (maxcolor == 1) {
          h = 2 + (rgb[2] - rgb[0]) / (max - min);
        }
        if (maxcolor == 2) {
          h = 4 + (rgb[0] - rgb[1]) / (max - min);
        }
        if (isNaN(h)) {h = 0;}
        h = h * 60;
        if (h < 0) {h = h + 360; }
        l = (min + max) / 2;
        if (min == max) {
          s = 0;
        } else {
          if (l < 0.5) {
            s = (max - min) / (max + min);
          } else {
            s = (max - min) / (2 - max - min);
          }
        }
        s = s;
        this.h = Math.round(h);
        this.s = Math.round(s * 100);
        this.l = Math.round(l * 100);
    }

    changeHue(hue: number): Color {
        if (Color.isHue(hue)) this.h = Math.round(hue);
        this.fillRGBfromHSL();
        return this;
    }

    static isHue(h: number): boolean {
        if (typeof h === "number" && h >= 0 && h <= 360) return true;
        return false;
    }

    alpha(a: number) {
        if (a >= 0 && a <= 1) this.a = a;
        return this;
    }

    fade(x: number) {
        if (x >= -1 && x <= 1) {
            this.a = Utils.clamp(this.a + x, 0, 1);
        }
        return this;
    }
}
