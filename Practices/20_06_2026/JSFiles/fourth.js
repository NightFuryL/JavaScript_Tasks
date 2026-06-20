//4
let comments = document.querySelector("#comments");
document.querySelector("#addComment")
.onclick = function()
{
    let name =
    document.querySelector("#name");
    let comment =
    document.querySelector("#comment");
    let div =
    document.createElement("div");
    div.classList.add("comment");
    div.innerHTML =
    "Name: " + name.value +
    "<br>Date: " + new Date() +
    "<br>" + comment.value;
    comments.append(div);
    name.value = "";
    comment.value = "";
}