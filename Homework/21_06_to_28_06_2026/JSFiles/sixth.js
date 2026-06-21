//6
function showTip(button, text) {
    let tip = document.createElement('div');
    tip.className = 'tooltip tip-top';
    tip.textContent = text;
    button.parentNode.appendChild(tip);
    let tipRect = tip.getBoundingClientRect();   
    if (tipRect.top < 0) {
        tip.classList.remove('tip-top');
        tip.classList.add('tip-bottom');
    }
}
function hideTip(button) {
    let tip = button.parentNode.querySelector('.tooltip');
    if (tip) {
        tip.remove();
    }
}