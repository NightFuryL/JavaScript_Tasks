document.addEventListener("DOMContentLoaded", () => {
    const colorForm = document.getElementById("colorForm");
    const paletteGrid = document.getElementById("paletteGrid");
    const colorTypeSelect = document.getElementById("colorType");
    const colorCodeInput = document.getElementById("colorCode");
    function getCookieValue(name) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const parts = cookies[i].split("=");
            if (parts[0] === name) {
                return parts[1];
            }
        }
        return undefined;
    }
    function renderPalette() {
        paletteGrid.innerHTML = "";
        const cookies = document.cookie.split("; ");   
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i] === "") continue;
            const parts = cookies[i].split("=");
            const cookieName = parts[0];
            const cookieValue = parts[1];
            if (cookieName === "email" || cookieName === "firstName" || cookieName === "lastName" || cookieName === "yearOfBirth" || cookieName === "gender" || cookieName === "phoneNumber" || cookieName === "skype") {
                continue;
            }
            if (cookieValue && cookieValue.indexOf("_") !== -1) {
                const valueParts = cookieValue.split("_");
                const type = valueParts[0];
                const code = valueParts[1];
                const card = document.createElement("div");
                card.className = "color-card";
                const preview = document.createElement("div");
                preview.className = "color-preview";
                if (type === "HEX") {
                    preview.style.backgroundColor = code;
                } else if (type === "RGB") {
                    preview.style.backgroundColor = "rgb(" + code + ")";
                } else if (type === "RGBA") {
                    preview.style.backgroundColor = "rgba(" + code + ")";
                }
                const nameDiv = document.createElement("div");
                nameDiv.className = "color-name";
                nameDiv.textContent = cookieName;
                const metaType = document.createElement("div");
                metaType.className = "color-meta";
                metaType.textContent = type;
                const metaCode = document.createElement("div");
                metaCode.className = "color-meta";
                metaCode.textContent = code;
                card.appendChild(preview);
                card.appendChild(nameDiv);
                card.appendChild(metaType);
                card.appendChild(metaCode);
                paletteGrid.appendChild(card);
            }
        }
    }
    colorTypeSelect.addEventListener("change", () => {
        const type = colorTypeSelect.value;
        if (type === "RGB") {
            colorCodeInput.placeholder = "255, 0, 0";
        } else if (type === "RGBA") {
            colorCodeInput.placeholder = "255, 0, 0, 0.5";
        } else if (type === "HEX") {
            colorCodeInput.placeholder = "#FF4500";
        }
    });
    colorForm.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("nameError").textContent = "";
        document.getElementById("codeError").textContent = "";
        const name = document.getElementById("colorName").value.trim();
        const type = colorTypeSelect.value;
        const code = colorCodeInput.value.trim();
        let isValid = true;
        if (name === "") {
            document.getElementById("nameError").textContent = "Required field";
            isValid = false;
        } else if (!/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]+$/.test(name)) {
            document.getElementById("nameError").textContent = "Only letters allowed";
            isValid = false;
        } else {
            if (getCookieValue(name) !== undefined) {
                document.getElementById("nameError").textContent = "Name must be unique";
                isValid = false;
            }
        }
        if (code === "") {
            document.getElementById("codeError").textContent = "Required field";
            isValid = false;
        } else {
            if (type === "RGB") {
                if (!/^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*$/.test(code)) {
                    document.getElementById("codeError").textContent = "Pattern: N, N, N";
                    isValid = false;
                } else {
                    const matches = code.match(/^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*$/);
                    const r = parseInt(matches[1], 10);
                    const g = parseInt(matches[2], 10);
                    const b = parseInt(matches[3], 10);
                    if (r > 255 || g > 255 || b > 255) {
                        document.getElementById("codeError").textContent = "Range must be 0-255";
                        isValid = false;
                    }
                }
            } else if (type === "RGBA") {
                if (!/^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*(0|1|0\.[0-9]+)\s*$/.test(code)) {
                    document.getElementById("codeError").textContent = "Pattern: N, N, N, A";
                    isValid = false;
                } else {
                    const matches = code.match(/^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*(0|1|0\.[0-9]+)\s*$/);
                    const r = parseInt(matches[1], 10);
                    const g = parseInt(matches[2], 10);
                    const b = parseInt(matches[3], 10);
                    const a = parseFloat(matches[4]);
                    if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) {
                        document.getElementById("codeError").textContent = "Invalid RGB (0-255) or Alpha (0-1)";
                        isValid = false;
                    }
                }
            } else if (type === "HEX") {
                if (!/^#[0-9a-fA-F]{6}$/.test(code)) {
                    document.getElementById("codeError").textContent = "Pattern: #ffffff";
                    isValid = false;
                }
            }
        }
        if (isValid) {
            document.cookie = name + "=" + type + "_" + code + "; max-age=10800; path=/";
            renderPalette();
            colorForm.reset();
        }
    });
    renderPalette();
});