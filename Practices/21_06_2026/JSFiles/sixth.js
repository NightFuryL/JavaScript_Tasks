let btn = document.querySelector('#scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
