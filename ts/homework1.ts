interface ICar {
    readonly mark: string,
    readonly accel: number,
    readonly braking: number,
    run(),
    stop()
}

abstract class Car implements ICar{
    mark: string;
    protected _wheels: number = 4;
    accel: number;
    braking: number;
    constructor(mark:string, accel: number, braking: number) {
        this.mark = mark;
        this.accel = accel;
        this.braking = braking;
    }

    get wheels(): number{
        return this._wheels;
    }

    run() {
        console.log(`${this.mark}: time from 0 to 100 -> ${this.accel}`);
    }

    stop() {
        console.log(`${this.mark}: time from 100 to 0 -> ${this.braking}`);
    }
}

class LightCar extends Car {
    constructor(mark:string, accel: number, braking: number) {
        super(mark, accel, braking);
    }
}

class Truck extends Car {
    protected _wheels: number = 6;
    constructor(mark:string, accel: number, braking: number) {
        super(mark, accel, braking);
    }
}

class VolvoTruck extends Truck {
    constructor(accel: number, braking: number) {
        super('Volvo', accel, braking);
    }
}


let lCar = new LightCar('Ford', 10, 15);
let tCar = new Truck('Zil', 42, 15);
let vCar = new VolvoTruck(25, 7);

console.log(lCar);
console.log(tCar);
console.log(vCar);

lCar.run();
lCar.stop();

tCar.run();
tCar.stop();

vCar.run();
vCar.stop();

console.log(`${lCar.mark} ->  ${lCar.wheels}`);
console.log(`${tCar.mark} ->  ${tCar.wheels}`);
console.log(`${vCar.mark} ->  ${vCar.wheels}`);

// lCar._wheels - error
// tCar._wheels - error
// vCar._wheels - error
