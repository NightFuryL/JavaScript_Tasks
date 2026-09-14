function washDishes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Посуд вимито");
        }, 2000);
    });
}

function cleanRoom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Кімнату прибрано");
        }, 4000);
    });
}

function makeDinner() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Вечеря приготована");
        }, 7000);
    });
}

const container3 = document.getElementById("result3");
const logs = [];

function logProgress(message) {
    console.log(message);
    logs.push(message);
    if (container3) {
        container3.innerHTML = logs.map(m => `<p>✅ ${m}</p>`).join("");
    }
}

washDishes()
    .then((res1) => {
        logProgress(res1);
        return cleanRoom();
    })
    .then((res2) => {
        logProgress(res2);
        return makeDinner();
    })
    .then((res3) => {
        logProgress(res3);
        console.log("Всі домашні справи виконано!");
    });