//3
class Employee
{
    constructor(name, position, salary)
    {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
//3.1
class EmpTable
{
    constructor(employees)
    {
        this.employees = employees;
    }
    getHtml()
    {
        let result = "<table border='1'>";
        result +=
        "<tr>" +
        "<th>Name</th>" +
        "<th>Position</th>" +
        "<th>Salary</th>" +
        "</tr>";
        for(let item of this.employees)
        {
            result +=
            "<tr>" +
            "<td>" + item.name + "</td>" +
            "<td>" + item.position + "</td>" +
            "<td>" + item.salary + "</td>" +
            "</tr>";
        }
        result += "</table>";
        return result;
    }
}
//3.2
let employees =
[
    new Employee(
        "Volodymyr",
        "Tech Lead",
        12000
    ),
    new Employee(
        "Lev",
        "Team Lead",
        10000
    ),
    new Employee(
        "Vlad",
        "Senior Developer",
        8000
    ),  
    new Employee(
        "Dmitry",
        "Junior Developer",
        5000
    )
    
];
let table = new EmpTable(employees);
document.write(
    table.getHtml()
);