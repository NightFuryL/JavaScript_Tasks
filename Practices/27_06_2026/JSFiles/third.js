//3
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('userForm');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const skills = formData.getAll('skills');
        data.skills = skills.join(', ');
        console.log(data);
        document.getElementById('resFirstname').textContent = data.firstname;
        document.getElementById('resLastname').textContent = data.lastname;
        if (data.birthday) {
            const parts = data.birthday.split('-');
            document.getElementById('resBirthday').textContent = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
        document.getElementById('resGender').textContent = data.gender;
        document.getElementById('resCountry').textContent = data.country;
        document.getElementById('resCity').textContent = data.city;
        document.getElementById('resSkills').textContent = data.skills;
        document.getElementById('resultTableContainer').style.display = 'block';
    });
});
