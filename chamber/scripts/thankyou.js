document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData) {
        document.getElementById("displayFirstName").textContent = formData.firstName;
        document.getElementById("displayLastName").textContent = formData.lastName;
        document.getElementById("displayEmail").textContent = formData.email;
        document.getElementById("displayPhone").textContent = formData.phone;
        document.getElementById("displayBusinessName").textContent = formData.businessName;
        document.getElementById("displayTimestamp").textContent = formData.timestamp;
    } else {
        document.querySelector(".thank-you-container").innerHTML = "<p>Error: No form data found.</p>";
    }
});