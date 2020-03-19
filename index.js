// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        // sum = (newSum, currentSum) => newSum + currentSum
        return this.sides.reduce(function (value, currentSum) {
            return value + currentSum
        })
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides !== 3) {
            return false
        } else {
            if ((this.sides[0] < this.sides[1] + this.sides[2]) && (this.sides[1] < this.sides[0] + this.sides[2]) && (this.sides[2] < this.sides[0] + this.sides[1])) {
                return true
            } else {
                return false
            }
        }
    }
}

class Square extends Polygon {
    
    get isValid() {
        if (this.countSides !== 4) {
            return false
        } else {
        if (Math.min(...this.sides) === Math.max(...this.sides)) {
            return true
        } else {
            return false
        }
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}

triangle = new Triangle([1, 5.5, 2.5])
harry = new Square([1,1,1,1])

console.log(harry.area)