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