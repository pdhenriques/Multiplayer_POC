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
        { id: "Color-Name-na", in: "n/a", out: "255,0,255,300,100,50,1" },
        { id: "Color-Hex8-UpCase", in: "#14555ACC", out: "20,85,90,184,64,22,0.8" },
        { id: "Color-Hex8-LoCase", in: "#14555acc", out: "20,85,90,184,64,22,0.8" },
        { id: "Color-Hex6-UpCase", in: "#14555A", out: "20,85,90,184,64,22,1" },
        { id: "Color-Hex6-LoCase", in: "#14555a", out: "20,85,90,184,64,22,1" },
        { id: "Color-Hex4-UpCase", in: "#3A7C", out: "51,170,119,154,54,43,0.8" },
        { id: "Color-Hex4-LoCase", in: "#3a7c", out: "51,170,119,154,54,43,0.8" },
        { id: "Color-Hex3-UpCase", in: "#3A7", out: "51,170,119,154,54,43,1" },
        { id: "Color-Hex3-LoCase", in: "#3a7", out: "51,170,119,154,54,43,1" },
        { id: "Color", in: "", out: "" },
        { id: "Color", in: "", out: "" },
        { id: "Color", in: "", out: "" },
    ]



    let testId = 0

    // Constructor
    test((++testId).toString(), () => {
        expect(new Color().toString()).toBe("255,0,255,300,100,50,1");
    });

    test((++testId).toString(), () => {
        expect(new Color(undefined).toString()).toBe("255,0,255,300,100,50,1");
    });

    colorConstructorTests.map((t) => test(t.id, () => {
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
