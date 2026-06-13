//3
class CssClass {
    constructor(name) {
        this.name = name;
        this.styles = [];
    }
    setStyle(name, value) {
        this.styles.push(
            name + ":" + value
        );
    }
    deleteStyle(name) {
        for (let i = 0; i < this.styles.length; i++) {
            if (this.styles[i].includes(name)) {
                this.styles.splice(i, 1);
            }
        }
    }
    getCss() {
        return "." + this.name +
            "{" +
            this.styles.join(";") +
            "}";
    }
}
//3.1
let css = new CssClass("wrapper");
css.setStyle("width","400px");
css.setStyle("padding","20px");
css.setStyle("border","1px solid black");
css.setStyle("text-align","center");