//4
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('colorForm');
    const container = document.getElementById('paletteContainer');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const item = document.createElement('div');
        item.className = 'palette-item';
        item.innerHTML = `
            <div class="color-box" style="background-color: rgb(${data.r}, ${data.g}, ${data.b});"></div>
            <span class="color-text">RGB (${data.r}, ${data.g}, ${data.b})</span>
        `;
        container.appendChild(item);
        form.reset();
    });
});