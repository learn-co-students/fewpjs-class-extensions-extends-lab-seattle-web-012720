// Your code here
class Polygon{
    constructor(intArray){
        this.intArray = intArray
    }

    get countSides(){
        return this.intArray.length
    }

    get perimeter(){
       return this.intArray.reduce((a,b) => a+b, 0)
    }
}

class Triangle extends Polygon{

    get isValid(){
        if (this.intArray[0]+this.intArray[1]<=this.intArray[2]){
            return false
        } else if (this.intArray[0]+this.intArray[2]<=this.intArray[1]){
            return false
        } else if (this.intArray[1]+this.intArray[2]<=this.intArray[0]){
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon{

    get isValid(){
      let validate = Array.from(new Set(this.intArray))
      if (validate.length === 1){
          return true
      } else {
          return false
      }
    }

    get area(){
        return (this.intArray[0])**2
    }

}

