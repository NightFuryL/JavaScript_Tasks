function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (!array || array.length === 0) {
            reject("Масив порожній");
        } else {
            setTimeout(() => {
                const sorted = [...array].sort((a, b) => a - b);
                resolve(sorted);
            }, 2000);
        }
    });
}

const container4 = document.getElementById("result4");

sortArray([5, 2, 9, 1, 7])
    .then((sorted) => {
        console.log("Відсортований масив:", sorted); // [1, 2, 5, 7, 9]
        if (container4) {
            container4.innerHTML = `<p>Успіх: [5, 2, 9, 1, 7] &rarr; [${sorted.join(", ")}]</p>`;
        }
    })
    .catch((error) => {
        console.error("Помилка:", error);
    });

sortArray([])
    .then((sorted) => {
        console.log("Відсортований масив:", sorted);
    })
    .catch((error) => {
        console.warn("Тест порожнього масиву:", error); 
    });