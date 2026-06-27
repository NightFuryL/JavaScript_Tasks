//2
function handleRegister(event) {
    event.preventDefault();
    let email = document.querySelector('#regEmail').value;
    let password = document.querySelector('#regPassword').value;
    let repeatPassword = document.querySelector('#regRepeatPassword').value;
    let message = document.querySelector('#registerMessage');
    if (password !== repeatPassword) {
        message.textContent = "Паролі не збігаються!";
        return;
    }
    message.textContent = `На ${email} надіслано лист із підтвердженням.`;
}