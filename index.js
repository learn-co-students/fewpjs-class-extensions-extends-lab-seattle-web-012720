class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(total, side) {
            return total = total + side;
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) {
            return false;
        } else {
            return (this.sides.find(side => {
                return this.perimeter - side <= side
            }) === undefined)
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {
            return false;
        } else {
            return (this.sides.find(side => {
                return side !== this.sides[0]
            }) === undefined)
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2
        }
    }
}