interface IPoint{
    getDist(): number;
}

class Point implements IPoint{
    constructor(public x: number, public y: number){}
    getDist(){ return Math.sqrt(this.x * this.x + this.y * this.y); }
}