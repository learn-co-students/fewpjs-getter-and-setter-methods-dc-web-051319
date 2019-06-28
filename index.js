class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2;
    };

    get circumference() {
        return 2 * this.radius * Math.PI;
    };

    get area() {
        return (this.radius ** 2) * Math.PI;
    };

    set diameter(diam) {
        this.radius = diam / 2;
    };

    set circumference(circ) {
        this.radius = circ / (2 * Math.PI);
    };

    set area(a) {
        this.radius = Math.sqrt( a / Math.PI ); 
    };
};