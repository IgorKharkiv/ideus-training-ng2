var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// create abstract class with default parameters
var Car = (function () {
    function Car(_mark, _timeTo_100, _timeTo_0, _wheels) {
        this.mark = _mark;
        this.wheels = _wheels;
        this.timeTo_100 = _timeTo_100;
        this.timeTo_0 = _timeTo_0;
    }
    Car.prototype.run = function () {
        console.log('This Car accelerete to 100 km/h for ', this.timeTo_100 + 'seconds');
    };
    Car.prototype.stop = function () {
        console.log('This Car stop from 100 rm/h for ', this.timeTo_0 + 'seconds');
    };
    Car.prototype.fullInform = function () {
        console.log(this.mark + ' wheels ' + this.wheels + ' time to 100 ' + this.timeTo_100 + ' time to 0 ' + this.timeTo_0);
    };
    return Car;
}());
// lightCar class
var LightCar = (function (_super) {
    __extends(LightCar, _super);
    function LightCar(_mark, _timeTo_100, _timeTo_0) {
        _super.call(this, _mark, _timeTo_100, _timeTo_0, 4);
    }
    return LightCar;
}(Car));
// truck class
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(_mark, _timeTo_100, _timeTo_0) {
        _super.call(this, _mark, _timeTo_100, _timeTo_0, 6);
    }
    return Truck;
}(Car));
// volvo truck class
var VolvoTruck = (function (_super) {
    __extends(VolvoTruck, _super);
    function VolvoTruck() {
        _super.call(this, 'Volvo', 25, 7);
    }
    return VolvoTruck;
}(Truck));
// init new instance
var mers = new LightCar('Mersedes', 11, 4);
var kraz = new Truck('Kraz', 20, 12);
var volvo = new VolvoTruck();
// examples with some errors
var bmv = new LightCar(1, 2, 2); // wrong type of first argument
var iveco = new Truck('Iveco', 22, 11);
if (iveco.wheels == 6) {
    console.log('True!');
}
iveco.wheels = 8; // we can not change readonly property
var volvo_1 = new VolvoTruck('Volvo', 11, 22); // this class does not accept any arguments
