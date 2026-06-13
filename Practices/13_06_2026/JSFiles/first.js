//1 Додав ще як параметр text та потім в тег додав  
{
    class PrintMachine {
        constructor(size, color, font) {
            this.size = size;
            this.color = color;
            this.font = font;
        }
        print(text) {
            document.write(
                "<p style='font-size:" + this.size +
                "px;color:" + this.color +
                ";font-family:" + this.font +
                "'>" + text + "</p>"
            );
        }
    }
    //1.1
    document.write("<p>EX 1<p>");
    let printer = new PrintMachine(30, "blue", "Arial");
    printer.print("Space Galaxy Universe Asteroid Solar Destroyer");
    document.write("<hr>");
}