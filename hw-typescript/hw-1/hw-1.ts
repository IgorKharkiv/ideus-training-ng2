/**
 * Interface Car
 */
interface CarInterface {
  run();
  stop();
}
/**
 * Abstract Class Car
 */
abstract class Car implements CarInterface {
  protected mark: string;
  protected timeAcceleration: number;
  protected timeStop: number;

  constructor(mark:string, timeAcceleration:number, timeStop:number) {
    this.mark = mark;
    this.timeAcceleration = timeAcceleration;
    this.timeStop = timeStop;
  }

  run() {
    console.log(`Time acceleration ${this.timeAcceleration}`);
  }

  stop() {
    console.log(`Time stop ${this.timeStop}`);
  }
}
/**
 * Class Light Car
 */
class LightCar extends Car {
  readonly wheels: number = 4;
  readonly mark: string;
  readonly timeAcceleration: number;
  readonly timeStop: number;
  
  constructor(mark:string, timeAcceleration:number, timeStop:number){
    super(mark, timeAcceleration, timeStop);
  }
}

/**
 * Class Truck Car
 */
class Truck extends Car {
  readonly wheels: number = 6;
  readonly mark: string;
  readonly timeAcceleration: number;
  readonly timeStop: number;
  
  constructor(mark:string, timeAcceleration:number, timeStop:number){
    super(mark, timeAcceleration, timeStop);
  }
}

/**
 * Class VolvoTruck Car
 */
class VolvoTruck extends Truck {
  readonly wheels: number = 6;
  readonly mark: string;
  readonly timeAcceleration: number;
  readonly timeStop: number;
  
  constructor(){
    super('VolvoTruck', 25, 7);
  }
}

let carLight = new LightCar('Toyota', 12 , 8);
carLight.run();
carLight.stop();
console.log(carLight);

let carTruck = new Truck('MAN', 40 , 15);
carTruck.run();
carTruck.stop();
console.log(carTruck);

let VolvoTruckCar = new VolvoTruck();
VolvoTruckCar.run();
VolvoTruckCar.stop();
console.log(VolvoTruckCar);
