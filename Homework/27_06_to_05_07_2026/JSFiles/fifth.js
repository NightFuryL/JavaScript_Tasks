//5
document.addEventListener("DOMContentLoaded", () => {
    const selectGroupBtn = document.getElementById("selectGroupBtn");
    const attendancePanel = document.getElementById("attendancePanel");
    const attendanceForm = document.getElementById("attendanceForm");
    const attendanceResult = document.getElementById("attendanceResult");

    selectGroupBtn.addEventListener("click", () => {
        attendancePanel.style.display = "block";
    });

    attendanceForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const group = document.getElementById("groupSelect").value;
        const lesson = document.getElementById("lessonSelect").value;
        const topic = document.getElementById("lessonTopic").value.trim();
        const checks = attendanceForm.querySelectorAll(".student-check");

        let absent = "";
        for (let i = 0; i < checks.length; i++) {
            if (!checks[i].checked) {
                absent += checks[i].value + ", ";
            }
        }

        attendanceResult.innerHTML = "Saved!<br>Group: " + group + "<br>Lesson: " + lesson + "<br>Topic: " + topic + "<br>Absent: " + (absent || "None");
        attendanceResult.style.display = "block";
    });
});