//3

class NewsLine {
    constructor() {
        this.news = [];
    }
    get count() {
        return this.news.length;
    }
    //3.1
    print() {
        for (let item of this.news) {
            item.print();
            document.write("<hr>");
        }
    }
    //3.2
    addNews(item) {
        this.news.push(item);
    }
    //3.3
    deleteNews(index) {
        //Видалення елементу через splice 
        this.news.splice(index, 1);
    }
    //3.4
    sortByDate() {
        //сортування за датами через функцію
        this.news.sort(
            function (a, b) {
                return b.date - a.date;
            }
        );
    }
    //3.5
    findByTag(tag) {
        let result = [];

        for (let item of this.news) {
            if (item.tags.includes(tag)) {
                result.push(item);
            }
        }
        return result;
    }
}
document.write("<p>EX 3<p>");
let line = new NewsLine();
let n1 = new News(
    "NMT",
    "YA SKLAV NMT YRAAAAA",
    ["NMT", "web"],
    new Date(2026, 5, 8)
);
let n2 = new News(
    "Space",
    "A NEW ASTEROID DESTROYER IS BORN!!!",
    ["Space", "web"],
    new Date(2024, 5, 1)
);
//3.6
line.addNews(n1);
line.addNews(n2);
line.print();
document.write(
    "<h3>Count: " + line.count + "</h3>"
);
line.sortByDate();
let found = line.findByTag("web");
document.write("<h3>Tags search result</h3>");
for (let item of found) {
    item.print();
}
line.deleteNews(0);