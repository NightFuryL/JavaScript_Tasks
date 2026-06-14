//4
//Додав ще  новий клас для тегу щоб були
//різні таблиці
class StyledEmpTable extends EmpTable
{
    getStyles()
    {
        return "<style>" +
        ".myTable{border-collapse:collapse}" +
        ".myTable td,.myTable th{" +
        "padding:10px;" +
        "border:1px solid black;" +
        "background-color:darkblue;" +
        "color:yellow;" +
        "}" +
        "</style>";
    }
    getHtml()
    {
        return this.getStyles() +
        super.getHtml()
        .replace(
            "<table",
            "<table class='myTable'"
        );
    }}
//4.1
let styledTable =
new StyledEmpTable(employees);
document.write(
    styledTable.getHtml()
);