// create abstract class with default parameters
abstract class Car {

  readonly mark: string;
  readonly wheels: number;
  readonly timeTo_100: number;
  readonly timeTo_0: number;


  constructor( _mark: string, _timeTo_100: number, _timeTo_0: number, readonly _wheels: number){
    this.mark = _mark;
    this.wheels = _wheels;
    this.timeTo_100 = _timeTo_100;
    this.timeTo_0 = _timeTo_0;
  }

  run(){
    console.log('This Car accelerete to 100 km/h for ', this.timeTo_100 + 'seconds');
  }

  stop(){
    console.log('This Car stop from 100 rm/h for ', this.timeTo_0 + 'seconds');
  }

  fullInform(){
    console.log( this.mark + ' wheels ' + this.wheels + ' time to 100 ' + this.timeTo_100 + ' time to 0 ' + this.timeTo_0);
  }

}

// lightCar class
class LightCar extends Car{

  constructor(_mark: string, _timeTo_100: number, _timeTo_0: number){
    let wheels = 4;
    super(_mark, _timeTo_100, _timeTo_0, wheels);
  }

}

// truck class
class Truck extends Car{

  constructor(_mark: string, _timeTo_100: number, _timeTo_0: number){
    let wheels = 6;
    super(_mark, _timeTo_100, _timeTo_0, wheels);

  }

}

// volvo truck class
class VolvoTruck extends Truck{

  constructor(){
    super('Volvo', 25, 7);
  }

}

// init new instance
let mers = new LightCar('Mersedes', 11, 4);
let kraz = new Truck('Kraz', 20, 12);
let volvo = new VolvoTruck();


// examples with some errors
let bmv = new LightCar(1, 2, 2); // wrong type of first argument

let iveco = new Truck('Iveco', 22, 11);
if(iveco.wheels == 6){
  console.log('True!');
}
iveco.wheels = 8; // we can not change readonly property

let volvo_1 = new VolvoTruck('Volvo', 11, 22); // this class does not accept any arguments