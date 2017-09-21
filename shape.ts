interface IRectangle{
    height: number;
    width: number;
    getArea(): number;
}

namespace Shapes{
    export class Rectangle implements IRectangle{
        constructor(public height: number, public width: number){}
        getArea(){
            return this.height * this.width;
        }
    }
}