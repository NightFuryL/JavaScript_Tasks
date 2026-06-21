//4
let display = document.querySelector('#display');
function press(value) {
    if (display.value === "error") {
        display.value = "";
    }
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        if (display.value.includes('/0')) {
            display.value = "error";
            return;
        }
        //Функція eval воно обчислює всю строку як математичний вираз
        //від англійської повне слово evaluate - обчислювати
        let result = eval(display.value);
        //Проста перевірка на праивльність виразу
        //isNaN - Визначає, чи є передане значення помилковим числом
        //isFinite - Перевіряє, чи є передане значення скінченним числом
        if (isNaN(result) || !isFinite(result)) {
            display.value = "error";
        } else {
            display.value = result;
        }
    } catch (err) {
        display.value = "error";
    }
}