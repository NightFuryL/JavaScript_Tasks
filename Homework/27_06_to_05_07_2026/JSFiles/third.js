//3
document.addEventListener("DOMContentLoaded", () => {
    const styleText = document.getElementById("styleText");
    const textBold = document.getElementById("textBold");
    const textUnderline = document.getElementById("textUnderline");
    const textItalic = document.getElementById("textItalic");
    const alignRadios = document.getElementsByName("align");

    function updateStyles() {
        styleText.style.fontWeight = textBold.checked ? "bold" : "normal";
        styleText.style.textDecoration = textUnderline.checked ? "underline" : "none";
        styleText.style.fontStyle = textItalic.checked ? "italic" : "normal";

        for (let i = 0; i < alignRadios.length; i++) {
            if (alignRadios[i].checked) {
                styleText.style.textAlign = alignRadios[i].value;
            }
        }
    }

    textBold.addEventListener("change", updateStyles);
    textUnderline.addEventListener("change", updateStyles);
    textItalic.addEventListener("change", updateStyles);

    for (let i = 0; i < alignRadios.length; i++) {
        alignRadios[i].addEventListener("change", updateStyles);
    }
});