function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(name, color = 'transparent') {
    this.name = name;
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicating...' + this.name);
    return {...this};
}

Shape.prototype.draw = function () {
    console.log('drawing...' + this.names);
}

function Point(x = 0, y = 0, z = 0) {
    Shape.call(this, 'Point');
    this.x = x;
    this.y = y;
    this.z = z;
}
extend(Point, Shape);

function Circle(centre, radius) {
    Shape.call(this, 'Circle');
    this.centre = centre;
    this.radius = radius;
    
}
extend(Circle, Shape);

function Square(side) {
    Shape.call(this, 'Square');
    this.side = side;
}
extend(Square, Shape);

function Rectangle(length, breadth) {
    Shape.call(this, 'Rectangle');
    this.length = length;
    this.breadth = breadth;
}
extend(Rectangle, Shape);

let  p = new Point(1, 2);

// ------------ exerice ------------

function HtmlElement() {
    this.click = function () {
        console.log('HtmlElement Clicked');
    }
}
HtmlElement.prototype.focus = function() {
    console.log('HtmlElement Focused');
}


function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(newItem) {
        this.items.push(newItem)
    };
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    this.render = function() {
        
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;