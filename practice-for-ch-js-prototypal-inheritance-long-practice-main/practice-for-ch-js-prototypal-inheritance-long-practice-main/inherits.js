Function.prototype.inherits = function (Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject() {}

function Ship() {}
console.log(Ship.inherits(MovingObject));
function Asteroid() {}
console.log(Asteroid.inherits(MovingObject));
