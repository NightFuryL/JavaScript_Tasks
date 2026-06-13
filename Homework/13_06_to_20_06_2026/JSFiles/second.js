//2
//Може можно було простіше або якось більш правльніше
//але в голову лізить тільки така реалізація
class MyHtmlElement {
    constructor(tagName, isSelfClose = false, text = "") {
        this.tagName = tagName;
        this.isSelfClose = isSelfClose;
        this.text = text;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    setAttribute(name, value) {
        this.attributes.push(
            name + '="' + value + '"'
        );
    }
    setStyle(name, value) {
        this.styles.push(
            name + ":" + value
        );
    }
    appendChild(element) {
        this.children.push(element);
    }
    prependChild(element) {
        this.children.unshift(element);
    }
    getHtml() {
        let result = "<" + this.tagName;
        if (this.attributes.length > 0) {
            result += " " + this.attributes.join(" ");
        }
        if (this.styles.length > 0) {
            result += ' style="' + this.styles.join(";") + '"';
        }
        if (this.isSelfClose) {
            result += ">";
            return result;
        }
        result += ">";
        result += this.text;
        for (let child of this.children) {
            result += child.getHtml();
        }
        result += "</" + this.tagName + ">";
        return result;
    }
}
//2.1
//Там дуже багато всього, можно дуже швидко заплутатись
//тому я зробив не все але логіка є та працює як потрібно
//якщо треба можу переробити, але просто багато часу піде на це((
let wrapper = new MyHtmlElement("div");
wrapper.setAttribute("id", "wrapper");
let title = new MyHtmlElement(
    "h1",
    false,
    "Lorem Ipsum"
);
let image = new MyHtmlElement(
    "img",
    true
);
image.setAttribute(
    "src",
    "../../../Resources/Images/test_image.jpg"
);
let text = new MyHtmlElement(
    "p",
    false,
    "Lorem ipsum dolor sit amet"
);
wrapper.appendChild(title);
wrapper.appendChild(image);
wrapper.appendChild(text);
document.write(wrapper.getHtml());