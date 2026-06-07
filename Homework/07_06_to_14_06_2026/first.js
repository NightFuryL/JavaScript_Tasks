//1
let car =
{
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    speed: 80
};
//1.1
function showCar(car)
{
    console.log(
        "Manufacturer: " + car.manufacturer +
        "\nModel: " + car.model +
        "\nYear: " + car.year +
        "\nAverage speed: " + car.speed
    );
}
//1.2
function getTravelTime(car, distance)
{
    let hours = distance / car.speed;
    let breaks = Math.floor(hours / 4);
    return hours + breaks;
}
//1.3
showCar(car);
console.log("Travel time: " + getTravelTime(car, 500) + " hours");