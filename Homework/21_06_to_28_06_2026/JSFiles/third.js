//3
let ball = document.querySelector('#ball');
let field = document.querySelector('#field');
function moveBall(event) {
    //Межі поля як екрана
    let fieldRect = field.getBoundingClientRect();
    //рахуємо координати лівого кута м'яча відносно поля
    //щоб саме ценьр був ьтам де ми клацнули 
    let targetX = event.clientX - fieldRect.left - 50;
    let targetY = event.clientY - fieldRect.top - 50;
    //перевірка меж
    if (targetX < 0) targetX = 0;
    if (targetY < 0) targetY = 0;
    //перевірка меж
    if (targetX > fieldRect.width - 100) targetX = fieldRect.width - 100;
    if (targetY > fieldRect.height - 100) targetY = fieldRect.height - 100;   
    //запис нових координат через стилі м'яча
    ball.style.left = targetX + 'px';
    ball.style.top = targetY + 'px';
}