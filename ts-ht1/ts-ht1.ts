// Common Class CAR
// that cannot be accessed
abstract class Car {
  private _mark: string;
  private _wheels: number;
  private _acceleration: number;
  private _stoptime: number;

  constructor(mark: string, wheels: number, acceleration: number, stoptime: number) {
    this._mark = mark;
    this._wheels = wheels;
    this._acceleration = acceleration;
    this._stoptime = stoptime;
  }

  // ACTIONS:
  run(): void {
    console.log('Is running...');
  }
  stop(): void {
    console.log('Is stopped...');
  }

  // GET:
  get mark(): string {
    return this._mark;
  }
  get wheels(): number {
    return this._wheels;
  }
  get acceleration(): number {
    return this._acceleration;
  }
  get stoptime(): number {
    return this._stoptime;
  }
}

class LightCar extends Car {

  constructor(mark: string, acceleration: number, stoptime: number) {
    super(mark, 4, acceleration, stoptime);
  }
}

class Track extends Car {

  constructor(mark: string, acceleration: number, stoptime: number) {
    super(mark, 6, acceleration, stoptime);
  }
}

class VolvoTrack extends Track {

  constructor() {
    super('Volvo', 25, 7);
  }
}

let car = new Car('Car', 4, 10, 8);
let lightCar = new LightCar('Light car', 12, 8);
let track = new Track('Man', 40, 15);
let volvoTrack = new Track();