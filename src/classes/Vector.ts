/**
 * Vector Class. Should work for both 2D and 3D Vectors. 
 * If any of the Vectors is 2D (this or that), it will operate as 2D only.
 */

export class Vector {
    x: number
    y: number
    z: number | undefined

    constructor(x: number = 0, y: number = 0, z?: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    static polar(mag: number, dir: number) {
        return new Vector(Math.cos(dir) * mag, Math.sin(dir) * mag)
    }

    clone() {
        return new Vector(this.x, this.y, this.z)
    }

    toString(precision: number = 2) {
        return `${this.x.toFixed(precision)},${this.y.toFixed(precision)},${this.z?.toFixed(precision)}`
    }

    add(that: Vector) {
        this.x += that.x
        this.y += that.y
        if (typeof this.z !== 'undefined') {
            this.z += that.z ?? 0
        }
        return this
    }

    sub(that: Vector) {
        this.x -= that.x
        this.y -= that.y
        if (typeof this.z !== 'undefined') {
            this.z -= that.z ?? 0
        }
        return this
    }

    mult(that: Vector) {
        this.x *= that.x
        this.y *= that.y
        if (typeof this.z !== 'undefined') {
            this.z *= that.z ?? 1
        }
        return this
    }

    div(that: Vector) {
        if (that.x !== 0 && that.y !== 0 && that.z !== 0) {
            this.x /= that.x
            this.y /= that.y
            if (typeof this.z !== 'undefined') {
                this.z /= that.z ?? 1
            }
        }
        return this
    }

    scale(s: number) {
        this.x *= s
        this.y *= s
        if (typeof this.z !== 'undefined') {
            this.z *= s
        }
        return this
    }

    len() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + (this.z ?? 0) ** 2)
    }

    norm() {
        const len = this.len() || 1
        return this.scale(1 / len)
    }

    dist(that: Vector) {
        return this.clone().sub(that).len()
    }

    dir() {
        return Math.atan2(this.y, this.x)
    }

}