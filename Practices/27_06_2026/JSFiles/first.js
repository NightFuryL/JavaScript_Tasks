//1
function handleLogin(event) {
    event.preventDefault();
    let login = document.querySelector('#loginInput').value;
    let isRemembered = document.querySelector('#rememberCheckbox').checked;
    let message = document.querySelector('#welcomeMessage');
    if (isRemembered) {
        message.textContent = `Привіт, ${login}! Я тебе запам'ятав.`;
    } else {
        message.textContent = `Привіт, ${login}! Я тебе не запам'ятав.`;
    }
}