const pointProps = new WeakMap();
const circleProps = new WeakMap();

class Point {
    constructor(x = 0, y = 0, z = undefined) {
        pointProps.set(
            this,
            {
                x: x,
                y: y,
                z: z
            }
        );
    }

    get x() {
        return pointProps.get(this).x;
    }

    set x(x) {
        pointProps.get(this).x = x;
    }
}

class Circle {
    constructor(radius, centre = new Point(0,0)) {
        circleProps.set(
            this,
            {
                radius: radius,
                centre: centre
            }
        );
    }

    get radius() {
        circleProps.get(this).radius;
    }

    set radius(radius) {
        circleProps.get(this).radius = radius;
    }

    get centre() {
        return circleProps.get(this).centre;
    }

    set centre(centre) {
        circleProps.set(this).centre = centre;
    }
}
