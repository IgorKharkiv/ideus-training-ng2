var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(mark, accel, braking) {
        this._wheels = 4;
        this.mark = mark;
        this.accel = accel;
        this.braking = braking;
    }
    Object.defineProperty(Car.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.run = function () {
        console.log(this.mark + ": time from 0 to 100 -> " + this.accel);
    };
    Car.prototype.stop = function () {
        console.log(this.mark + ": time from 100 to 0 -> " + this.braking);
    };
    return Car;
}());
var LightCar = (function (_super) {
    __extends(LightCar, _super);
    function LightCar(mark, accel, braking) {
        return _super.call(this, mark, accel, braking) || this;
    }
    return LightCar;
}(Car));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(mark, accel, braking) {
        var _this = _super.call(this, mark, accel, braking) || this;
        _this._wheels = 6;
        return _this;
    }
    return Truck;
}(Car));
var VolvoTruck = (function (_super) {
    __extends(VolvoTruck, _super);
    function VolvoTruck(accel, braking) {
        return _super.call(this, 'Volvo', accel, braking) || this;
    }
    return VolvoTruck;
}(Truck));
var lCar = new LightCar('Ford', 10, 15);
var tCar = new Truck('Zil', 42, 15);
var vCar = new VolvoTruck(25, 7);
console.log(lCar);
console.log(tCar);
console.log(vCar);
lCar.run();
lCar.stop();
tCar.run();
tCar.stop();
vCar.run();
vCar.stop();
console.log(lCar.mark + " ->  " + lCar.wheels);
console.log(tCar.mark + " ->  " + tCar.wheels);
console.log(vCar.mark + " ->  " + vCar.wheels);
// lCar._wheels - error
// tCar._wheels - error
// vCar._wheels - error
