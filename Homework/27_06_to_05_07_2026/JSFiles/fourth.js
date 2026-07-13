//4
document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("bookForm");
    const bookResult = document.getElementById("bookResult");

    bookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const checkboxes = bookForm.querySelectorAll(".book-select");
        const date = document.getElementById("deliveryDate").value.trim();
        const comment = document.getElementById("deliveryComment").value.trim();

        let total = 0;
        let selectedBooks = "";

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                total += parseInt(checkboxes[i].getAttribute("data-price"), 10);
                selectedBooks += checkboxes[i].getAttribute("data-name") + ", ";
            }
        }

        if (total > 0 && date !== "") {
            bookResult.innerHTML = "Thank you for order!<br>Books: " + selectedBooks + "<br>Total: $" + total + "<br>Delivery date: " + date + "<br>Comment: " + comment;
            bookResult.style.display = "block";
        }
    });
});