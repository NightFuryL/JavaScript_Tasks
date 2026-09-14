const jsonFileInput = document.getElementById("jsonFileInput");
const tableContainer = document.getElementById("tableContainer");

jsonFileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    
    tableContainer.innerHTML = "";

    if (!file) return;
    if (!file.name.endsWith(".json") && file.type !== "application/json") {
        alert("Будь ласка, виберіть файл у форматі JSON!");
        jsonFileInput.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            renderJsonTable(data);
        } catch (error) {
            alert("Помилка читання JSON файлу. Перевірте його коректність.");
            console.error(error);
        }
    };

    reader.readAsText(file);
});

function renderJsonTable(data) {
    if (typeof data !== "object" || data === null) {
        tableContainer.textContent = "JSON містить некоректні дані.";
        return;
    }

    const table = document.createElement("table");
    table.className = "json-table";

    // Шапка таблиці
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Поле (Ключ)</th>
            <th>Значення</th>
        </tr>
    `;
    table.appendChild(thead);

    // Тіло таблиці
    const tbody = document.createElement("tbody");

    Object.keys(data).forEach(key => {
        const row = document.createElement("tr");

        const keyCell = document.createElement("td");
        keyCell.textContent = key;

        const valueCell = document.createElement("td");
        const val = data[key];

        // Якщо значення об'єкт або масив - тоді виводимо у форматі <pre>
        if (typeof val === "object" && val !== null) {
            const pre = document.createElement("pre");
            pre.textContent = JSON.stringify(val, null, 2);
            valueCell.appendChild(pre);
        } else {
            valueCell.textContent = val === null ? "null" : val;
        }

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}