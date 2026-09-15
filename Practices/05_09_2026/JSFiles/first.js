function calculate(a, b, onSuccess, onError) {
    if (b === 0) {
        onError("Ділення на нуль заборонено");
    } else {
        onSuccess(a / b);
    }
}

function onSuccess(result) {
    console.log("Результат:", result);
    const container = document.getElementById("result1");
    if (container) {
        container.innerHTML += `<p style="color: green;">Успіх: Результат = ${result}</p>`;
    }
}

function onError(error) {
    console.error("Помилка:", error);
    const container = document.getElementById("result1");
    if (container) {
        container.innerHTML += `<p style="color: red;">Помилка: ${error}</p>`;
    }
}

calculate(10, 2, onSuccess, onError);
calculate(10, 0, onSuccess, onError);