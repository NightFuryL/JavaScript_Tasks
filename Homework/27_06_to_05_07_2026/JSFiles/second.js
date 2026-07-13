//2
document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");

    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let score = 0;

        const q1 = quizForm.elements["q1"].value;
        const q2 = quizForm.elements["q2"].value;

        if (q1 === "correct") score++;
        if (q2 === "correct") score++;

        quizResult.textContent = "Your score: " + score + " / 2";
        quizResult.style.display = "block";
    });
});