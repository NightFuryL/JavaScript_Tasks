//2

class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }
    print() {
        document.write("<hr>");
        //Невеличкі розрахунки для дати 
        let now = new Date();
        let days = Math.floor(
            (now - this.date) / 1000 / 60 / 60 / 24
        );
        let dateText;
        if (days < 1) {
            dateText = "today";
        }
        else if (days < 7) {
            dateText = days + " days ago";
        }
        else {
            dateText =
                this.date.getDate() + "." +
                (this.date.getMonth() + 1) + "." +
                this.date.getFullYear();
        }
        document.write(
            "<h1>" + this.title + "</h1>\n" +
            "<h5>Date: " + dateText + "</h5>\n" +
            "<p>" + this.text + "</p>\n" +
            "<p>Tags: " + this.tags.join(", ") + "</p>\n"
        );
        document.write("<hr>");
    }
}
//2.1
document.write("<p>EX 2<p>");
let news = new News(
    "Space",
    "A NEW ASTEROID DESTROYER IS BORN!!!",
    ["Space", "code", "C++Best"],
    new Date()
)
news.print();
document.write("<hr>");
