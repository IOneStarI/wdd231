document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData) {
        document.getElementById("displayPlaceName").textContent = formData.placeName;
        document.getElementById("displayFirstName").textContent = formData.firstName;
        document.getElementById("displayEmail").textContent = formData.email;
        document.getElementById("displayPhone").textContent = formData.phone;
        document.getElementById("displayRating").textContent = formData.rating;
        document.getElementById("displayComment").textContent = formData.comment;
        document.getElementById("displayTimestamp").textContent = formData.timestamp;
    } else {
        document.querySelector(".thank-you-container").innerHTML = "<p>Error: No form data found.</p>";
    }
});