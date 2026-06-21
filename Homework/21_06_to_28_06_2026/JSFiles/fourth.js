//4
//проста реалізація завданная видаляємо або додаємо клас 
//як додатковий стиль 
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');

function nextColor() {
    if (red.classList.contains('active-red')) {
        red.classList.remove('active-red');
        yellow.classList.add('active-yellow');
    } else if (yellow.classList.contains('active-yellow')) {
        yellow.classList.remove('active-yellow');
        green.classList.add('active-green');
    } else if (green.classList.contains('active-green')) {
        green.classList.remove('active-green');
        red.classList.add('active-red');
    }
}
