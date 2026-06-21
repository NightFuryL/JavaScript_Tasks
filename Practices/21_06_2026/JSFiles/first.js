//1
const table = document.getElementById('companyTable');
table.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'TD') {
        e.target.style.backgroundColor = '#ffa86a';
    }
});
table.addEventListener('mouseout', function (e) {
    if (e.target.tagName === 'TD') {
        e.target.style.backgroundColor = '';
    }
});
