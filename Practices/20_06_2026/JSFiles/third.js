//3
let text = document.querySelector("#text");
let colors = document.querySelectorAll(".color");
for(let item of colors)
{
    item.onclick = function()
    {
        text.style.color =
        item.dataset.color;
    }
}