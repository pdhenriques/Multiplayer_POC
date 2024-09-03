import { Color } from '../Color';

interface testType {
    id: string,
    in: string,
    out: string,
}

describe("Color", () => {

    /**
     * Some test color:
     * "255,  0,255,300,100,50,1"
     */

    const colorConstructorTests: Array<testType> = [
        { id: "Color", in: "", out: "255,0,255,300,100,50,1" },
        
        { id: "Color-Name-Blue", in: "Blue", out: "0,0,255,240,100,50,1" },
        { id: "Color-Name-blue", in: "blue", out: "0,0,255,240,100,50,1" },
        { id: "Color-Name-bluE", in: "bluE", out: "0,0,255,240,100,50,1" },
        { id: "Color-Name-fail", in: "n/a", out: "255,0,255,300,100,50,1" },

        { id: "Color-Hex8-UpCase", in: "#14555ACC", out: "20,85,90,184,64,22,0.8" },
        { id: "Color-Hex8-LoCase", in: "#14555acc", out: "20,85,90,184,64,22,0.8" },
        { id: "Color-Hex6-UpCase", in: "#14555A", out: "20,85,90,184,64,22,1" },
        { id: "Color-Hex6-LoCase", in: "#14555a", out: "20,85,90,184,64,22,1" },
        { id: "Color-Hex4-UpCase", in: "#3A7C", out: "51,170,119,154,54,43,0.8" },
        { id: "Color-Hex4-LoCase", in: "#3a7c", out: "51,170,119,154,54,43,0.8" },
        { id: "Color-Hex3-UpCase", in: "#3A7", out: "51,170,119,154,54,43,1" },
        { id: "Color-Hex3-LoCase", in: "#3a7", out: "51,170,119,154,54,43,1" },
        { id: "Color-Hex-fail-1", in: "#", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hex-fail-2", in: "#GGaa11", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hex-fail-3", in: "#1122334455", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hex-fail-3", in: "#1122334", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hex-fail-4", in: "#1", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hex-fail-5", in: "#$%^&aa", out: "255,0,255,300,100,50,1" },

        { id: "Color-Rgb-LoCase", in: "rgb(32, 159, 223)", out: "32,159,223,200,75,50,1" },
        { id: "Color-Rgba-LoCase", in: "rgba(32, 159, 223, 0.5)", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Rgb-UpCase", in: "RGB(32, 159, 223)", out: "32,159,223,200,75,50,1" },
        { id: "Color-Rgba-UpCase", in: "RGBA(32, 159, 223, 0.5)", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Rgb-Spaces1", in: "rgb(32,159,223)", out: "32,159,223,200,75,50,1" },
        { id: "Color-Rgb-Spaces2", in: " rgb ( 32 , 159 , 223 ) ", out: "32,159,223,200,75,50,1" },
        { id: "Color-Rgba-Spaces1", in: "rgba(32,159,223,0.5)", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Rgba-Spaces2", in: " rgba ( 32 , 159 , 223 , 0.5 ) ", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Rgb-fail-1", in: "r(32,159,223)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-2", in: "rgb(999,159,223)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-3", in: "rgb(32,159,223", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-4", in: "rgb32,159,223)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-5", in: "rgb(32,999,223)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-6", in: "rgb(32,159,99999999999)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-7", in: "rgb(-32,159,223)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgb-fail-8", in: "rgb(32.159.223)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgba-fail-1", in: "rgb(32, 159, 223, 0.5)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgba-fail-2", in: "rgba(32, 159, 223, -1)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgba-fail-3", in: "rgba(32, 159, 223, -0)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgba-fail-4", in: "rgba(32, 159, 223, 2)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Rgba-fail-5", in: "rgba(32, 159, 223, -0.12345678)", out: "255,0,255,300,100,50,1" },

        { id: "Color-Hsl-LoCase", in: "hsl(200, 75, 50)", out: "32,159,223,200,75,50,1" },
        { id: "Color-Hsla-LoCase", in: "hsla(200, 75, 50, 0.5)", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Hsl-UpCase", in: "HSL(200, 75, 50)", out: "32,159,223,200,75,50,1" },
        { id: "Color-Hsla-UpCase", in: "HSLA(200, 75, 50, 0.5)", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Hsl-Spaces1", in: "hsl(200,75,50)", out: "32,159,223,200,75,50,1" },
        { id: "Color-Hsl-Spaces2", in: " hsl ( 200 , 75 , 50 ) ", out: "32,159,223,200,75,50,1" },
        { id: "Color-Hsla-Spaces1", in: "hsla(200,75,50,0.5)", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Hsla-Spaces2", in: " hsla ( 200 , 75 , 50 , 0.5 ) ", out: "32,159,223,200,75,50,0.5" },
        { id: "Color-Hsl-fail-1", in: "r(200,75,50)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-2", in: "hsl(999,75,50)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-3", in: "hsl(200,75,50", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-4", in: "hsl200,75,50)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-5", in: "hsl(200,999,50)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-6", in: "hsl(200,75,99999999999)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-7", in: "hsl(-200,75,50)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsl-fail-8", in: "hsl(200.75.50)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsla-fail-1", in: "hsl(200, 75, 50, 0.5)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsla-fail-2", in: "hsla(200, 75, 50, -1)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsla-fail-3", in: "hsla(200, 75, 50, -0)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsla-fail-4", in: "hsla(200, 75, 50, 2)", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hsla-fail-5", in: "hsla(200, 75, 50, -0.12345678)", out: "255,0,255,300,100,50,1" },

        { id: "Color", in: "", out: "255,0,255,300,100,50,1" },
        { id: "Color", in: "", out: "255,0,255,300,100,50,1" },
    ]



    let count = 0

    // Constructor
    test((++count).toString(), () => {
        expect(new Color().toString()).toBe("255,0,255,300,100,50,1");
    });

    test((++count).toString(), () => {
        expect(new Color(undefined).toString()).toBe("255,0,255,300,100,50,1");
    });

    colorConstructorTests.map((t) => test((++count)+": "+t.id, () => {
        expect(new Color(t.in).toString()).toBe(t.out);
    }))

    /**
     * TO DO
     * static creators + clone
     * toStrings
     * alphas
     * hues
     */


});
