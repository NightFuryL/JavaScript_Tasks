console.log("=== Завдання 4 ===");

function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 === 0) {
                resolve(`Парне число: ${number}`);
            } else {
                reject(`Непарне число: ${number}`);
            }
        }, 1000);
    });
}

const container4 = document.getElementById("result4");
const logs4 = [];

function appendLog(msg, isError = false) {
    const color = isError ? "red" : "green";
    logs4.push(`<p style="color: ${color};">${msg}</p>`);
    if (container4) {
        container4.innerHTML = logs4.join("");
    }
}

checkEvenNumber(8)
    .then((res) => {
        console.log(res);
        appendLog(`✅ ${res}`);
    })
    .catch((err) => {
        console.error(err);
        appendLog(`❌ ${err}`, true);
    });

checkEvenNumber(7)
    .then((res) => {
        console.log(res);
        appendLog(`✅ ${res}`);
    })
    .catch((err) => {
        console.warn(err);
        appendLog(`❌ ${err}`, true);
    });