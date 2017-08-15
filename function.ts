module functions{
    var squareItSimple = function(h: number, w: number){
        return h * w;
    }

    var squareItSimlest = (h: number, w: number) => h*w;

    var helloWorld : (name? : string) => void;
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || 'unknow person'));
    }

    helloWorld();
    helloWorld('Kevin');

    var squareIt: (rect: {h: number; w? : number;}) => number;

    var rectA = {h: 7};
    var rectB = {h: 7, w: 12};

    squareIt = function(rect){
        if(rect.w === undefined)
                return rect.h * rect.h;
        return rect.h * rect.w;
    }

    console.log(squareIt(rectA));
    console.log(squareIt(rectB));

    //interfaces
    interface SquareFunction {
        (x: number): number;
    }

    var squareItBasic: SquareFunction =
                    (num: number) => num * num;

    interface Rectangle {
        h: number;
        w?: number;
    }

    var squareIt2: (rect: Rectangle) => number;

    squareIt2 = function(rect){
        if(rect.w === undefined)
                return rect.h * rect.h;
        return rect.h * rect.w;
    }
    
    interface Person {
        name: string;
        age?: number;
        kids: number;

        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    var p: Person = {
        // favoriteMovie: 'LOTR',
        name: 'Kevin',
        age: 20,
        kids: 0,
        calcPets: function(){
            return this.kids ;
        },
        makeYounger: function(years: number){
            this.age -= years;
        },
        greet: function(msg: string){
            return msg + ', ' + this.name;
        }
    };

    var pets = p.calcPets();
    console.log(pets);

    p.makeYounger(15);
    var newAge = p.age;
    console.log(newAge);

    var msg = p.greet('Good !');
    console.log(msg);


    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }

    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) =>
            ratings.push(rating);
        ;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach(function (score) {
                sum += score;
            });

            return sum / ratings.length;
        };

        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
}