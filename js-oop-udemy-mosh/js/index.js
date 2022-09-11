function Circle(centre, radius) {
    this.centre = centre;
    this.radius = radius;
    
}

function Point(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

let origin = new Point();
let c = new Circle(origin, 5);
console.log(c);

Circle.prototype.draw = function () {
    console.log('drawing...');
}

