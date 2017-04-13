var Snake = function() {
    var length = 10;

    this.getLength = function() {
        return length;
    }
}

Snake.prototype = Object.create(Animal.prototype);

var u = new Snake();

var Namespace = (function() {
    return {
        A: {},
        B: {}
    }
})();

/*

class / interface / abstract / private / public / protected

class Car
    -> mark: string
    -> wheels: number
    -> accel: number (time from 0 to 100)
    -> time from 100 to 0
    -> run() - show accel in console
    -> stop() - show stop time in console

class LightCar (wheels always = 4, mark & accel & stop time set when initializing)

light.wheels = 6 - prohibited
light.accel = 7 - prohibited

class Truck (wheels always = 6, mark & accel & stop time set when initializing)

class VolvoTruck (wheels == Truck, mark = 'Volvo', cannot change, accel = 25, stop time = 7 when initializing)

new Car(...) - prohibited
new LightCar('Toyota', 12, 8)
new Truck('MAN', 40, 15)
new VolvoTruck()

.run()
.stop()

2*)

get / set

.wheels - you can view them, but cannot change
.accel - you can view them, but cannot change
.stopTime - you can view them, but cannot change

light.wheels == 4 // true
light.wheels = 6 // error







*/