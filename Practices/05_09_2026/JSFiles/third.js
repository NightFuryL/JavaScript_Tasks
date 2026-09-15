function createOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Замовлення створено: ${orderId}`);
        }, 1000);
    });
}

function processOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Замовлення оброблено: ${orderId}`);
        }, 2000);
    });
}

function deliverOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Замовлення доставлено: ${orderId}`);
        }, 3000);
    });
}

const container3 = document.getElementById("result3");
const logs3 = [];

function logStep(msg) {
    console.log(msg);
    logs3.push(msg);
    if (container3) {
        container3.innerHTML = logs3.map(item => `<p>● ${item}</p>`).join("");
    }
}

const currentOrderId = 101;

createOrder(currentOrderId)
    .then((res1) => {
        logStep(res1);
        return processOrder(currentOrderId);
    })
    .then((res2) => {
        logStep(res2);
        return deliverOrder(currentOrderId);
    })
    .then((res3) => {
        logStep(res3);
        console.log("Усі етапи замовлення завершено!");
    });