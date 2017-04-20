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
// Common Class CAR
// that cannot be accessed
var Car = (function () {
    function Car(mark, wheels, acceleration, stoptime) {
        this._mark = mark;
        this._wheels = wheels;
        this._acceleration = acceleration;
        this._stoptime = stoptime;
    }
    // ACTIONS:
    Car.prototype.run = function () {
        console.log('Is running...');
    };
    Car.prototype.stop = function () {
        console.log('Is stopped...');
    };
    Object.defineProperty(Car.prototype, "mark", {
        // GET:
        get: function () {
            return this._mark;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "stoptime", {
        get: function () {
            return this._stoptime;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var LightCar = (function (_super) {
    __extends(LightCar, _super);
    function LightCar(mark, acceleration, stoptime) {
        return _super.call(this, mark, 4, acceleration, stoptime) || this;
    }
    return LightCar;
}(Car));
var Track = (function (_super) {
    __extends(Track, _super);
    function Track(mark, acceleration, stoptime) {
        return _super.call(this, mark, 6, acceleration, stoptime) || this;
    }
    return Track;
}(Car));
var VolvoTrack = (function (_super) {
    __extends(VolvoTrack, _super);
    function VolvoTrack() {
        return _super.call(this, 'Volvo', 25, 7) || this;
    }
    return VolvoTrack;
}(Track));
var car = new Car('Car', 4, 10, 8);
var lightCar = new LightCar('Light car', 12, 8);
var track = new Track('Man', 40, 15);
var volvoTrack = new Track();
