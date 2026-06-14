//3
class ExtentedArray extends Array
{
    getString(separator)
    {
        return this.join(separator);
    }
    getHtml(tagName)
    {
        let result = "";
        if(tagName == "li")
        {
            result = "<ul>";
            for(let item of this)
            {
                result += "<li>" + item + "</li>";
            }
            result += "</ul>";
        }
        else
        {
            for(let item of this)
            {
                result += 
                "<" + tagName + ">" +
                item +
                "</" + tagName + ">";
            }
        }
        return result;
    }
}
//3.1
let array = new ExtentedArray();
array.push("C#");
array.push("THE");
array.push("BEST");
document.write(
    array.getString(" - ")
);
document.write(
    array.getHtml("li")
);