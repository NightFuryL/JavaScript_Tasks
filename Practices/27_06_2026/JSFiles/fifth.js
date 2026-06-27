//5
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('quizForm');
    const list = document.getElementById('questionsList');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerHTML = `
            <div class="question-title">${data.question}</div>
            <div>Correct answer: ${data.correct}</div>
            <div>Wrong answer: ${data.wrong}</div>
        `;
        list.appendChild(item);
        form.reset();
    });
});