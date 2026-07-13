document.addEventListener("DOMContentLoaded", () => {
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    const email = getCookie('email');
    if (!email) {
        window.location.href = "index.html";
        return;
    }
    document.getElementById('userGreeting').textContent = email;
    const fields = ['firstName', 'lastName', 'yearOfBirth', 'gender', 'phoneNumber', 'skype'];
    for (let i = 0; i < fields.length; i++) {
        const savedValue = getCookie(fields[i]);
        if (savedValue) {
            document.getElementById(fields[i]).value = savedValue;
        }
    }
    document.getElementById('exitLink').addEventListener('click', (e) => {
        e.preventDefault();
        const allCookies = ['email', 'firstName', 'lastName', 'yearOfBirth', 'gender', 'phoneNumber', 'skype'];
        for (let i = 0; i < allCookies.length; i++) {
            document.cookie = allCookies[i] + "=; max-age=0; path=/";
        }
        window.location.href = "index.html";
    });
    const form = document.getElementById('infoValidationForm');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        for (let i = 0; i < fields.length; i++) {
            const errorElement = document.getElementById(fields[i] + 'Error');
            if (errorElement) errorElement.textContent = '';
        }
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const yearOfBirth = document.getElementById('yearOfBirth').value.trim();
        const gender = document.getElementById('gender').value;
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const skype = document.getElementById('skype').value.trim();
        let isValid = true;
        if (firstName === '') {
            document.getElementById('firstNameError').textContent = 'Required field';
            isValid = false;
        } else if (firstName.length > 20 || !/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+$/.test(firstName)) {
            document.getElementById('firstNameError').textContent = 'Invalid name';
            isValid = false;
        }
        if (lastName === '') {
            document.getElementById('lastNameError').textContent = 'Required field';
            isValid = false;
        } else if (lastName.length > 20 || !/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+$/.test(lastName)) {
            document.getElementById('lastNameError').textContent = 'Invalid last name';
            isValid = false;
        }
        const currentYear = new Date().getFullYear();
        const yearNum = parseInt(yearOfBirth, 10);
        if (yearOfBirth === '') {
            document.getElementById('yearError').textContent = 'Required field';
            isValid = false;
        } else if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
            document.getElementById('yearError').textContent = 'Invalid year';
            isValid = false;
        }
        if (phoneNumber !== '') {
            const digits = phoneNumber.replace(/\D/g, '');
            if (!/^[0-9\s()+-]+$/.test(phoneNumber) || digits.length < 10 || digits.length > 12) {
                document.getElementById('phoneError').textContent = 'Invalid phone';
                isValid = false;
            }
        }
        if (skype !== '' && !/^[a-zA-Z0-9.-]+$/.test(skype)) {
            document.getElementById('skypeError').textContent = 'Invalid skype';
            isValid = false;
        }
        if (isValid) {
            document.cookie = "firstName=" + encodeURIComponent(firstName) + "; max-age=3600; path=/";
            document.cookie = "lastName=" + encodeURIComponent(lastName) + "; max-age=3600; path=/";
            document.cookie = "yearOfBirth=" + encodeURIComponent(yearOfBirth) + "; max-age=3600; path=/";
            document.cookie = "gender=" + encodeURIComponent(gender) + "; max-age=3600; path=/";
            document.cookie = "phoneNumber=" + encodeURIComponent(phoneNumber) + "; max-age=3600; path=/";
            document.cookie = "skype=" + encodeURIComponent(skype) + "; max-age=3600; path=/";
            alert("Data saved successfully!");
        }
    });
});