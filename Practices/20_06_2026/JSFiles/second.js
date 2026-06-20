//2
function addBlock()
{
    const container = document.getElementById('blocksContainer');
    const newBlock = document.createElement('div');
    newBlock.classList.add('color-block');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    newBlock.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    newBlock.onclick = function() {
        newBlock.remove();
    };
    container.appendChild(newBlock);
}
