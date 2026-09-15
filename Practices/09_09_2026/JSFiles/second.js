function sumArrayAsync(array) {
    return new Promise(async (resolve, reject) => {
        if (!Array.isArray(array) || array.length === 0) {
            reject("Масив порожній");
            return;
        }

        let sum = 0;
        for (const num of array) {
            await new Promise((res) => setTimeout(res, 1000));
            sum += num;
        }

        resolve(sum);
    });
}

async function main2() {
    const container = document.getElementById("result2");
    const testArray = [5, 10, 15, 20];

    try {
        const total = await sumArrayAsync(testArray);
        console.log("Сума:", total);

        if (container) {
            container.innerHTML = `
                <p>Масив: [${testArray.join(", ")}]</p>
                <p><strong>Сума: ${total}</strong></p>
            `;
        }
    } catch (error) {
        console.error(error);
        if (container) {
            container.innerHTML = `<p style="color: red;">${error}</p>`;
        }
    }
}

main2();