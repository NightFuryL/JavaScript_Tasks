//2
class Figure
{
    get name()
    {
        return "Figure";
    }
    showInfo()
    {
        return "";
    }
    area()
    {
        return 0;
    }
    perimeter()
    {
        return 0;
    }
}
//2.1
class Square extends Figure
{
    constructor(side)
    {
        super();

        this.side = side;
    }
    get name()
    {
        return "Square";
    }
    showInfo()
    {
        return "Side: " + this.side;
    }
    area()
    {
        return this.side * this.side;
    }

    perimeter()
    {
        return this.side * 4;
    }
}
//2.2
class Rectangle extends Figure
{
    constructor(width, height)
    {
        super();
        this.width = width;
        this.height = height;
    }
    get name()
    {
        return "Rectangle";
    }
    showInfo()
    {
        return "Width: " + this.width +
        " Height: " + this.height;
    }
    area()
    {
        return this.width * this.height;
    }
    perimeter()
    {
        return (this.width + this.height) * 2;
    }
}


//2.3
class Triangle extends Figure
{
    constructor(a,b,c,height)
    {
        super();

        this.a = a;
        this.b = b;
        this.c = c;
        this.height = height;
    }
    get name()
    {
        return "Triangle";
    }
    showInfo()
    {
        return "Sides: " +
        this.a + "," +
        this.b + "," +
        this.c;
    }
    area()
    {
        return this.a * this.height / 2;
    }
    perimeter()
    {
        return this.a + this.b + this.c;
    }
}
//2.4
let figures =
[
    new Square(5),
    new Rectangle(10,4),
    new Triangle(5,6,7,4)
];
for(let item of figures)
{
    console.log(
        item.name + "\n" +
        item.showInfo() +
        "\nArea: " + item.area() +
        "\nPerimeter: " + item.perimeter() + "\n" +
        "=======================================\n"
    );
}
