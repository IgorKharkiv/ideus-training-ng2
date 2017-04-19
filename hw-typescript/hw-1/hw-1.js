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
/**
 * Abstract Class Car
 */
var Car = (function () {
    function Car(mark, timeAcceleration, timeStop) {
        this.mark = mark;
        this.timeAcceleration = timeAcceleration;
        this.timeStop = timeStop;
    }
    Car.prototype.run = function () {
        console.log("Time acceleration " + this.timeAcceleration);
    };
    Car.prototype.stop = function () {
        console.log("Time stop " + this.timeStop);
    };
    return Car;
}());
/**
 * Class Light Car
 */
var LightCar = (function (_super) {
    __extends(LightCar, _super);
    function LightCar(mark, timeAcceleration, timeStop) {
        var _this = _super.call(this, mark, timeAcceleration, timeStop) || this;
        _this.wheels = 4;
        return _this;
    }
    return LightCar;
}(Car));
var carOne = new LightCar('Toyota', 12, 8);
carOne.run();
carOne.stop();
carOne.wheels = 6;
carOne.timeAcceleration = 1000;
console.log(carOne);
//# sourceMappingURL=hw-1.js.map