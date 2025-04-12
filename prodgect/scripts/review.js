document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const timestampField = document.getElementById("timestamp");

    timestampField.value = new Date().toLocaleString();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const ratingInput = form.querySelector('input[name="rating"]:checked');
        const rating = ratingInput ? ratingInput.value : "Not selected";

        const formData = {
            placeName: form.elements["place"].value,
            firstName: form.elements["name"].value,
            email: form.elements["email"].value,
            phone: form.elements["phone"].value,
            rating: rating,
            comment: form.elements["additionnal-comments"].value,
            timestamp: timestampField.value
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        window.location.href = "thankyou.html";
    });
});