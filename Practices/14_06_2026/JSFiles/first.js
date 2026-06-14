//1
class Button
{
    constructor(width, height, text)
    {
        this.width = width;
        this.height = height;
        this.text = text;
    }
    showBtn()
    {
        document.write(
            "<button style='width:" + this.width +
            "px;height:" + this.height +
            "px'>" + this.text + "</button>"
        );
    }
}
//1.1
class BootstrapButton extends Button
{
    constructor(width, height, text, color)
    {
        super(width, height, text);

        this.color = color;
    }
    showBtn()
    {
        document.write(
            "<button style='width:" + this.width +
            "px;height:" + this.height +
            "px;background:" + this.color +
            "'>" + this.text + "</button>"
        );
    }
}
//1.2
let btn = new Button(
    150,
    50,
    "Button"
);
btn.showBtn();
let btn2 = new BootstrapButton(
    200,
    60,
    "Bootstrap",
    "green"
);
btn2.showBtn();