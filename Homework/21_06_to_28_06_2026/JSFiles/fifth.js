//5
//ще один приклад із простих реалізацій як це можно було зробити
//просто додаємо або видаляємо клас як стиль 
function selectBook(event) {
    if (event.target.tagName === 'LI') {
        let currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        event.target.classList.add('active');
    }
}