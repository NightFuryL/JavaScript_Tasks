//1
//Я мабуть не пам'ятаю, але щоб ключові гетери та сетери ми вкиористовували 
//я подивився в інтернеті як вони реалізуються в джавасрипті та ось так 
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(value) {
        this.radius = value;
    }
    get diameter() {
        return this.radius * 2;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    length() {
        return 2 * Math.PI * this.radius;
    }
}
//1.1
let circle = new Circle(5);
console.log("Radius: " + circle.getRadius);
console.log("Diameter: " + circle.diameter);
console.log("Area: " + circle.area());
console.log("Length: " + circle.length());
circle.setRadius = 10;
console.log("New radius: " + circle.getRadius);
