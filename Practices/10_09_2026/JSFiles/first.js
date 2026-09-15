const fetchBtn = document.getElementById("fetch-dog-btn");
const statusMessage = document.getElementById("status-message");
const dogImage = document.getElementById("dog-image");

async function getRandomDog() {
    fetchBtn.disabled = true;
    statusMessage.style.color = "#000";
    statusMessage.textContent = "Шукаємо хвостика...";

    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "success") {
            dogImage.src = data.message;
            dogImage.style.display = "block";
            statusMessage.textContent = "";
        } else {
            throw new Error("API status is not success");
        }
    } catch (error) {
        console.error("Помилка завантаження:", error);
        statusMessage.style.color = "red";
        statusMessage.textContent = "Не вдалося завантажити фото. Спробуйте ще раз";
    } finally {
        fetchBtn.disabled = false;
    }
}

fetchBtn.addEventListener("click", getRandomDog);