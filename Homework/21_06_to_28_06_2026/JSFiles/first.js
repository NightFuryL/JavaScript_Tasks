//1
let nameInput = document.querySelector('#nameInput');
nameInput.addEventListener('keydown', function (e) {
    if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
    }
});