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
  public timeAcceleration: number;
  public timeStop: number;

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

let carOne = new LightCar('Toyota', 12 , 8);
carOne.run();
carOne.stop();
carOne.wheels = 6;
carOne.timeAcceleration = 1000;
console.log(carOne);
