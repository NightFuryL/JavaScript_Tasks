function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
            reject(new Error("Некоректні значення"));
            return;
        }

        setTimeout(() => {
            resolve(a * b);
        }, 2000);
    });
}

async function main() {
    const container1 = document.getElementById("result1");

    try {
        const result = await multiplyAsync(6, 9);
        console.log("Результат множення 6 * 9:", result);

        if (container1) {
            container1.innerHTML = `<p><strong>Результат:</strong> 6 * 9 = ${result}</p>`;
        }

    } catch (error) {
        console.error("Помилка множення:", error.message);
        if (container1) {
            container1.innerHTML = `<p style="color: #ff6b6b;">Помилка: ${error.message}</p>`;
        }
    }
}

main();