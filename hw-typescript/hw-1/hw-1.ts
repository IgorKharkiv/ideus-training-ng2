interface CarInterface {
  mark: string;
  wheels: number;
  timeAcceleration: number;
  timeStop: number;

  run();
  stop();
}

abstract class Car implements CarInterface {
  public mark: string;
  public timeAcceleration: number;
  public timeStop: number;
  public wheels: number;

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

class LightCar extends Car {
  wheels: number = 4;
  mark: string;
  timeAcceleration: number;
  timeStop: number;
  
  constructor(mark:string, timeAcceleration:number, timeStop:number){
    super(mark, timeAcceleration, timeStop);
  }
}

let carOne = new LightCar('Toyota', 12 , 8);
carOne.run();
carOne.stop();
console.log(carOne);
