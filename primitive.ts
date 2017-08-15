module primitive{
    //any
    var data: any;
    var info;
    var doSomething = function(arg){
        return arg;
    }

    // var x = doSomething(5);

    //primitive
    var age: number = 21;
    var score: number = 34.56;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;

    var isBald = function(){ return 'yes'; }
    var hasHair = !!isBald();

    var firstName: string = 'John';
    var lastName = 'Papa';

    //string array
    function getArrayLength(x: string[]){
        var len:number = x.length;
        return len;
    }

    var names: string[] = ['John', 'Dan', 'Aaron', 'Fritz'];
    var firstPerson: string = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity: number;
    var company = undefined;

    //objects
    var points1 = { x: 10, y:20 };
    var x = points1.x;

    var points2: {};
    points2 = {x: 10, y: 20};

    var points3: Object = {x:1};

    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function(){
            return this.h * this.w;
        }
    };

    console.log('rect area = ' + rectangle.calcArea());

    //Functions
    var squareIt1 = function(x){
        return x * x;
    };

    var val1 = squareIt1(2);
    console.log('squareIt1 = ' + val1);

    val1 = squareIt1(8);
    console.log('squareIt1 = ' + val1);

    var squareIt = function(rect : { h:number; w?: number;}){
        if(rect.w === undefined) return rect.h * rect.h;
        return rect.w * rect.h;
    };

    var sq1: number = squareIt({h:10});
    console.log('Rect h and w of 10 = ' + sq1);
    var sq2: number = squareIt({h:10, w:40});
    console.log('Rect h 40 and w of 10 = ' + sq2);
}