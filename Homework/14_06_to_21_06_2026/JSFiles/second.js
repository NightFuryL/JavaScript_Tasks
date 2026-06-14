//2
class ExtendedDate extends Date
{
    showDate()
    {
        let months =
        [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return this.getDate() +
        "." +
        months[this.getMonth()];
    }
    //Ось тут трохи не розумію як зробити, але
    //сподіваюсь воно праивльне тому що я не розумію як саме треба
    isFuture()
    {
        let now = new Date();
        return this >= now;
    }
    isLeapYear()
    {
        let year = this.getFullYear();
        return year % 400 == 0 ||
        year % 4 == 0 &&
        year % 100 != 0;
    }
    nextDate()
    {
        let date = new ExtendedDate(this);
        date.setDate(
            date.getDate() + 1
        );
        return date;
    }
}
//2.1
let date = new ExtendedDate();
console.log(
    date.showDate()
);
console.log(
    "Future: " +
    date.isFuture()
);
console.log(
    "Leap year: " +
    date.isLeapYear()
);
console.log(
    "Next date: " +
    date.nextDate()
);