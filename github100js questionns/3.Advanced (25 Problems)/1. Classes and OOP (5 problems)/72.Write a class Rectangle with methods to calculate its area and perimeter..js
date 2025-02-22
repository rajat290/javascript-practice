// Write a class Rectangle with methods to calculate its area and perimeter.


class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    area (){
        return this.length * this.width;
    }
    perimeter(){
        return 2 * (this.width + this.length);

    }
}