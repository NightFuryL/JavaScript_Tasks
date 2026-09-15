function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 завершено"), 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 завершено"), 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 3 завершено"), 3000);
    });
}

async function executeTasks() {
    const container = document.getElementById("result1");
    const logs = [];

    const res1 = await task1();
    console.log(res1);
    logs.push(res1);
    if (container) container.innerHTML = logs.map(m => `<p>${m}</p>`).join("");

    const res2 = await task2();
    console.log(res2);
    logs.push(res2);
    if (container) container.innerHTML = logs.map(m => `<p>${m}</p>`).join("");

    const res3 = await task3();
    console.log(res3);
    logs.push(res3);
    if (container) container.innerHTML = logs.map(m => `<p>${m}</p>`).join("");
}

async function main1() {
    await executeTasks();
    console.log("Усі завдання завершено");
    
    const container = document.getElementById("result1");
    if (container) {
        container.innerHTML += `<p><strong>Усі завдання завершено</strong></p>`;
    }
}

main1();