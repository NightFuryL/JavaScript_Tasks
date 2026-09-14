function filterArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isEven(number) {
    return number % 2 === 0;
}

function isShortWord(word) {
    return String(word).length <= 4;
}

const resEven = filterArray([1, 2, 3, 4, 5], isEven);
const resWords = filterArray(["cat", "elephant", "dog", "bird"], isShortWord);

console.log("isEven:", resEven); // [2, 4]
console.log("isShortWord:", resWords); // ["cat", "dog", "bird"]

const container2 = document.getElementById("result2");
if (container2) {
    container2.innerHTML = `
        <p><strong>isEven:</strong> [1, 2, 3, 4, 5] &rarr; [${resEven.join(", ")}]</p>
        <p><strong>isShortWord:</strong> ["cat", "elephant", "dog", "bird"] &rarr; [${resWords.map(s => `"${s}"`).join(", ")}]</p>
    `;
}