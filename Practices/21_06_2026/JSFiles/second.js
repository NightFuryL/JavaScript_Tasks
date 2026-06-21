//2
const content = document.getElementById('content')
content.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
content.addEventListener('selectstart', function(e) {
    e.preventDefault();
});