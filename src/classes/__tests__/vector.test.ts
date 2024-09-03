import { Vector } from '../Vector';

describe("Vector", () => {

    let count = 0

    // Constructor
    test((++count)+": Vector-NoArguments", () => {
        expect(new Vector().toString()).toBe("0.00,0.00,undefined");
    });
    test((++count)+": Vector-Undefined", () => {
        expect(new Vector(undefined).toString()).toBe("0.00,0.00,undefined");
    });
    test((++count)+": Vector-OneArgument-1", () => {
        expect(new Vector(10).toString()).toBe("10.00,0.00,undefined");
    });
    test((++count)+": Vector-OneArgument-2", () => {
        expect(new Vector(0).toString()).toBe("0.00,0.00,undefined");
    });
    test((++count)+": Vector-OneArgument-3", () => {
        expect(new Vector(-10).toString()).toBe("-10.00,0.00,undefined");
    });
    test((++count)+": Vector-TwoArguments-1", () => {
        expect(new Vector(10,5).toString()).toBe("10.00,5.00,undefined");
    });
    test((++count)+": Vector-TwoArguments-2", () => {
        expect(new Vector(0,0).toString()).toBe("0.00,0.00,undefined");
    });
    test((++count)+": Vector-TwoArguments-3", () => {
        expect(new Vector(-10,-5).toString()).toBe("-10.00,-5.00,undefined");
    });
    test((++count)+": Vector-ThreeArguments-1", () => {
        expect(new Vector(10,5,2).toString()).toBe("10.00,5.00,2.00");
    });
    test((++count)+": Vector-ThreeArguments-2", () => {
        expect(new Vector(0,0,0).toString()).toBe("0.00,0.00,0.00");
    });
    test((++count)+": Vector-ThreeArguments-3", () => {
        expect(new Vector(-10,-5,-2).toString()).toBe("-10.00,-5.00,-2.00");
    });
    test((++count)+": Vector-ThreeArguments-4", () => {
        expect(new Vector(undefined,undefined,undefined).toString()).toBe("0.00,0.00,undefined");
    });

    // Clone vector
    test((++count)+": Vector-Clone-1", () => {
        const v = new Vector(1,2)
        const t = v.clone()
        expect(v.x === t.x).toBe(true);
        t.x++
        expect(v.x === t.x).toBe(false);
    });
    test((++count)+": Vector-Clone-2", () => {
        const v = new Vector(1,2,3)
        const t = v.clone()
        expect(v.x === t.x).toBe(true);
        t.x++
        expect(v.x === t.x).toBe(false);
    });
    test((++count)+": Vector-NotClone", () => {
        const v = new Vector(1,2,3)
        const t = v
        expect(v.x === t.x).toBe(true);
        t.x++
        expect(v.x === t.x).toBe(true);
    });

    // create Vector from Polar coordinates
    test((++count)+": Vector-Polar-1", () => {
        expect(Vector.polar(1,Math.PI/2).toString(3)).toBe("0.000,1.000,undefined");
    });
    test((++count)+": Vector-Polar-2", () => {
        expect(Vector.polar(1,Math.PI).toString(3)).toBe("-1.000,0.000,undefined");
    });
    test((++count)+": Vector-Polar-3", () => {
        expect(Vector.polar(1,Math.PI/4).toString(3)).toBe("0.707,0.707,undefined");
    });

    // Addition by
    test((++count)+": Vector-Add-1", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2,3)
        expect(v.add(t).toString(0)).toBe("2,4,6");
    });
    test((++count)+": Vector-Add-2", () => {
        const v = new Vector(1,2)
        const t = new Vector(1,2,3)
        expect(v.add(t).toString(0)).toBe("2,4,undefined");
    });
    test((++count)+": Vector-Add-3", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2)
        expect(v.add(t).toString(0)).toBe("2,4,3");
    });
    test((++count)+": Vector-Add-4", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(1,2,3)
        expect(v.add(t).toString(0)).toBe("1,2,3");
    });
    test((++count)+": Vector-Add-5", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(0,0,0)
        expect(v.add(t).toString(0)).toBe("1,2,3");
    });
    test((++count)+": Vector-Add-6", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(0,0,0)
        expect(v.add(t).toString(0)).toBe("0,0,0");
    });

    // Subtract by
    test((++count)+": Vector-Sub-1", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2,3)
        expect(v.sub(t).toString(0)).toBe("0,0,0");
    });
    test((++count)+": Vector-Sub-2", () => {
        const v = new Vector(1,2)
        const t = new Vector(1,2,3)
        expect(v.sub(t).toString(0)).toBe("0,0,undefined");
    });
    test((++count)+": Vector-Sub-3", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2)
        expect(v.sub(t).toString(0)).toBe("0,0,3");
    });
    test((++count)+": Vector-Sub-4", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(1,2,3)
        expect(v.sub(t).toString(0)).toBe("-1,-2,-3");
    });
    test((++count)+": Vector-Sub-5", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(0,0,0)
        expect(v.sub(t).toString(0)).toBe("1,2,3");
    });
    test((++count)+": Vector-Sub-6", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(0,0,0)
        expect(v.sub(t).toString(0)).toBe("0,0,0");
    });

    // Multiply by
    test((++count)+": Vector-Mult-1", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2,3)
        expect(v.mult(t).toString(0)).toBe("1,4,9");
    });
    test((++count)+": Vector-Mult-2", () => {
        const v = new Vector(1,2)
        const t = new Vector(1,2,3)
        expect(v.mult(t).toString(0)).toBe("1,4,undefined");
    });
    test((++count)+": Vector-Mult-3", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2)
        expect(v.mult(t).toString(0)).toBe("1,4,3");
    });
    test((++count)+": Vector-Mult-4", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(1,2,3)
        expect(v.mult(t).toString(0)).toBe("0,0,0");
    });
    test((++count)+": Vector-Mult-5", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(0,0,0)
        expect(v.mult(t).toString(0)).toBe("0,0,0");
    });
    test((++count)+": Vector-Mult-6", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(0,0,0)
        expect(v.mult(t).toString(0)).toBe("0,0,0");
    });

    // Divide by
    test((++count)+": Vector-Div-1", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2,3)
        expect(v.div(t).toString(0)).toBe("1,1,1");
    });
    test((++count)+": Vector-Div-2", () => {
        const v = new Vector(1,2)
        const t = new Vector(1,2,3)
        expect(v.div(t).toString(0)).toBe("1,1,undefined");
    });
    test((++count)+": Vector-Div-3", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(1,2)
        expect(v.div(t).toString(0)).toBe("1,1,3");
    });
    test((++count)+": Vector-Div-4", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(1,2,3)
        expect(v.div(t).toString(0)).toBe("0,0,0");
    });
    test((++count)+": Vector-Div-5", () => {
        const v = new Vector(1,2,3)
        const t = new Vector(0,0,0)
        expect(v.div(t).toString(0)).toBe("1,2,3");
    });
    test((++count)+": Vector-Div-6", () => {
        const v = new Vector(0,0,0)
        const t = new Vector(0,0,0)
        expect(v.div(t).toString(0)).toBe("0,0,0");
    });

    // Scale or Scalar
    test((++count)+": Vector-Scale-1", () => {
        const v = new Vector(1,2,3)
        expect(v.scale(2).toString(0)).toBe("2,4,6");
    });
    test((++count)+": Vector-Scale-2", () => {
        const v = new Vector(1,2)
        expect(v.scale(0).toString(0)).toBe("0,0,undefined");
    });
    test((++count)+": Vector-Scale-3", () => {
        const v = new Vector(1,2,3)
        expect(v.scale(-2).toString(0)).toBe("-2,-4,-6");
    });

    // Length

    // Normalize

    // Distance

    // Direction

});
