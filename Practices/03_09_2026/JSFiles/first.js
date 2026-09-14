const jsonInput = document.getElementById("json-input");
const jsonOutput = document.getElementById("json-output");
const formatBtn = document.getElementById("format-btn");
const errorMessage = document.getElementById("error-message");

formatBtn.addEventListener("click", () => {
    const rawData = jsonInput.value.trim();

    if (!rawData) {
        jsonOutput.value = "";
        errorMessage.classList.add("hidden");
        return;
    }

    try {
        const parsedData = JSON.parse(rawData);

        jsonOutput.value = JSON.stringify(parsedData, null, 4);

        errorMessage.classList.add("hidden");
    } catch (error) {
        jsonOutput.value = "";
        errorMessage.classList.remove("hidden");
    }
});