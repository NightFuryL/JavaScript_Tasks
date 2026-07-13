//1
document.addEventListener("DOMContentLoaded", () => {
    const forumForm = document.getElementById("forumForm");
    const messagesList = document.getElementById("messagesList");

    forumForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("forumName").value.trim();
        const msg = document.getElementById("forumMessage").value.trim();

        if (name !== "" && msg !== "") {
            const now = new Date();
            const timeStr = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();

            const item = document.createElement("div");
            item.className = "message-item";

            const header = document.createElement("div");
            header.className = "message-header";
            header.innerHTML = "<span>" + name + "</span><span>" + timeStr + "</span>";

            const text = document.createElement("div");
            text.className = "message-text";
            text.textContent = msg;

            item.appendChild(header);
            item.appendChild(text);
            messagesList.appendChild(item);

            forumForm.reset();
        }
    });
});