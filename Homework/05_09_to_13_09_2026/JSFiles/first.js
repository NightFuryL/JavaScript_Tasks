function processArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}
function doubleElement(element) {
    return element * 2;
}

function reverseElement(element) {
    return String(element).split("").reverse().join("");
}
const res1 = processArray([1, 2, 3, 4, 5], doubleElement);
const res2 = processArray(["hello", "world"], reverseElement);

console.log("doubleElement:", res1); // [2, 4, 6, 8, 10]
console.log("reverseElement:", res2); // ["olleh", "dlrow"]

const container1 = document.getElementById("result1");
if (container1) {
    container1.innerHTML = `
        <p><strong>doubleElement:</strong> [1, 2, 3, 4, 5] &rarr; [${res1.join(", ")}]</p>
        <p><strong>reverseElement:</strong> ["hello", "world"] &rarr; [${res2.map(s => `"${s}"`).join(", ")}]</p>
    `;
}