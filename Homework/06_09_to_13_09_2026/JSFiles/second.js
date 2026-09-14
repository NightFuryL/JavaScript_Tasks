function sortArrayAsync(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array) || array.length === 0) {
            reject(new Error("Масив порожній"));
            return;
        }

        setTimeout(() => {
            const sortedArray = [...array].sort((a, b) => a - b);
            resolve(sortedArray);
        }, 2000);
    });
}

async function main() {
    const container2 = document.getElementById("result2");
    const testArray = [42, 12, 88, 3, 27, 5];

    try {
        console.log("Початковий масив:", testArray);
        const sorted = await sortArrayAsync(testArray);
        console.log("Відсортований масив:", sorted);

        if (container2) {
            container2.innerHTML = `
                <p><strong>Початковий масив:</strong> [${testArray.join(", ")}]</p>
                <p><strong>Відсортований масив:</strong> [${sorted.join(", ")}]</p>
            `;
        }
    } catch (error) {
        console.error("Помилка сортування:", error.message);
        if (container2) {
            container2.innerHTML = `<p style="color: #ff6b6b;">Помилка: ${error.message}</p>`;
        }
    }
}

main();