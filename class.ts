class Engine{

    //short hand writing to generate fields
    constructor(public horsePower: number, public engineType: string) { }
}

class Car{
    private _engine: Engine;

    constructor(engine: Engine){
        this._engine = engine;
    }

    get engine(): Engine{
        return this._engine;
    }

    set engine(value: Engine){
        if(value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }

    start(): void {
        alert('Engine started: ' + this._engine.engineType);
    }

    stop(): void {
        alert('Engine stopped: ' + this._engine.engineType);
    }
}

window.onload = function(){
    var engine = new Engine(300, 'V8');
    var ar = new Car(engine);
}