//4
class HtmlBlock {
    constructor() {
        this.styles = [];
        this.root = null;
    }
    addStyle(style) {
        this.styles.push(style);
    }
    getCode() {
        let result = "<style>";
        for (let item of this.styles) {
            result += item.getCss();
        }
        result += "</style>";
        result += this.root.getHtml();
        return result;
    }
}
//4.1
let block = new HtmlBlock();
block.addStyle(css);
let root = new MyHtmlElement("div");
root.setAttribute("class","wrapper");
let h = new MyHtmlElement(
    "h2",
    false,
    "News block"
);
let img = new MyHtmlElement(
    "img",
    true
);
img.setAttribute(
    "src",
    "../../../Resources/Images/test_image.jpg"
);
let p = new MyHtmlElement(
    "p",
    false,
    "Text inside HTML block"
);
root.appendChild(h);
root.appendChild(img);
root.appendChild(p);
block.root = root;
document.write(block.getCode());