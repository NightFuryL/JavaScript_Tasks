document.addEventListener("DOMContentLoaded", () => {
    if (document.cookie.includes("email=")) {
        window.location.href = "user.html";
        return;
    }
    const form = document.getElementById('regValidationForm');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('repeatError').textContent = '';
        const email = document.getElementById('emailInput').value.trim();
        const password = document.getElementById('passwordInput').value;
        const repeat = document.getElementById('repeatInput').value;
        let isValid = true;
        if (email === '') {
            document.getElementById('emailError').textContent = 'Required field';
            isValid = false;
        } else if (!/^[a-zA-Z._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            document.getElementById('emailError').textContent = 'Wrong email address';
            isValid = false;
        }
        if (password === '') {
            document.getElementById('passwordError').textContent = 'Required field';
            isValid = false;
        } else if (password.length < 6 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            document.getElementById('passwordError').textContent = 'Weak password';
            isValid = false;
        }
        if (repeat === '') {
            document.getElementById('repeatError').textContent = 'Required field';
            isValid = false;
        } else if (repeat !== password) {
            document.getElementById('repeatError').textContent = 'Passwords must match';
            isValid = false;
        }
        if (isValid) {
            document.cookie = "email=" + encodeURIComponent(email) + "; max-age=3600; path=/";
            window.location.href = "user.html";
        }
    });
});