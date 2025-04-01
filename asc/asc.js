// Circle Class
class Circle {
    constructor(radius) {
        this.radius = radius; // Data member
    }

    // Function to calculate area
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Function to display details
    showDetails() {
        console.log(`Circle with radius ${this.radius}`);
    }
}