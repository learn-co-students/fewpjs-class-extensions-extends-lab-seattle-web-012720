// Your code here

class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let total = 0;
        return this.sides.reduce(function(total, element) {
            return element + total
        })
    }
}

class Triangle extends Polygon {

    get isValid() {   
        return 2 * Math.max(...this.sides) < this.perimeter
    }
}

class Square extends Polygon {

    get isValid() {   
        return this.sides.every(side => side === this.sides[0])
    }

    get area() {   
        return this.sides[0] ** 2
    }
}