function processArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const res = callback(array[i]);
        if (res !== undefined) {
            result.push(res);
        }
    }
    return result.length > 0 ? result : undefined;
}

function logElement(element) {
    console.log("Елемент:", element);
}

function squareElement(element) {
    return element * element;
}

console.log("--- Викликаємо logElement ---");
processArray([1, 2, 3, 4], logElement);

console.log("--- Викликаємо squareElement ---");
const squared = processArray([1, 2, 3, 4], squareElement);
console.log("Квадрати елементів:", squared);

const container2 = document.getElementById("result2");
if (container2) {
    container2.innerHTML = `
        <p><strong>logElement:</strong> Елементи [1, 2, 3, 4] виведено в консоль.</p>
        <p><strong>squareElement:</strong> [1, 2, 3, 4] &rarr; [${squared.join(", ")}]</p>
    `;
}