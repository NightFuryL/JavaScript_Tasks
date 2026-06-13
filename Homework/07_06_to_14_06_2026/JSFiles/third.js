//3
let time =
{
    hours: 20,
    minutes: 30,
    seconds: 45
};
//3.1
function showTime(t)
{
    console.log(
        t.hours + ":" +
        t.minutes + ":" +
        t.seconds
    );
}
//3.2
function addSeconds(t, sec)
{
    t.seconds += sec;
    while(t.seconds >= 60)
    {
        t.seconds -= 60;
        t.minutes++;
    }
    while(t.minutes >= 60)
    {
        t.minutes -= 60;
        t.hours++;
    }
    while(t.hours >= 24)
    {
        t.hours -= 24;
    }
}
//3.3
function addMinutes(t, min)
{
    t.minutes += min;
    while(t.minutes >= 60)
    {
        t.minutes -= 60;
        t.hours++;
    }
    while(t.hours >= 24)
    {
        t.hours -= 24;
    }
}
//3.4
function addHours(t, h)
{
    t.hours += h;
    while(t.hours >= 24)
    {
        t.hours -= 24;
    }
}
//3.5
showTime(time);
addSeconds(time, 30);
showTime(time);
addMinutes(time, 40);
showTime(time);
addHours(time, 5);
showTime(time);