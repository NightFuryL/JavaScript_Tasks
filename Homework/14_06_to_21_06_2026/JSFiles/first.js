//1
//Я сподіваюсь я правильно зрозумів завдання 
class Marker
{
    constructor(color, ink)
    {
        this.color = color;
        this.ink = ink;
    }
    print(text)
    {
        let result = "";
        for(let i = 0; i < text.length; i++)
        {
            if(text[i] != " ")
            {
                if(this.ink <= 0)
                {
                    break;
                }
                this.ink -= 0.5;
            }
            result += text[i];
        }
        document.write(
            "<p style='color:" +
            this.color +
            "'>" +
            result +
            "</p>"
        );
    }
}
//1.1
class RefillableMarker extends Marker
{
    refill()
    {
        this.ink = 100;
    }
}
//1.2
let marker = new RefillableMarker(
    "red",
    5
);
marker.print("C# is the best programming language in the world");
marker.refill();
marker.print("New text after refill");