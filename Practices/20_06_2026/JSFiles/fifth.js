//5
let countries =
[
    "Ukraine",
    "USA",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Poland",
    "Japan",
    "China",
    "Canada"
];
let input =
document.querySelector("#country");
let hints =
document.querySelector("#hints");
//Подивився що в інпута є подія input, 
//яка спрацьовує при кожній зміні значення інпута
input.oninput = function()
{
    hints.innerHTML = "";
    let value =
    input.value.toLowerCase();
    let count = 0;
    for(let country of countries)
    {
        if(
            country.toLowerCase()
            .includes(value)
        )
        {
            let div =
            document.createElement("div");
            div.classList.add("hint");
            div.textContent =
            country;
            div.onclick = function()
            {
                input.value =
                country;
            }
            hints.append(div);
            count++;
            if(count == 10)
            {
                break;
            }
        }
    }
}