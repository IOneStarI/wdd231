document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll(".membership-card a");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            modals[index].style.display = "flex";
        });
    });

    closeButtons.forEach((close, index) => {
        close.addEventListener("click", () => {
            modals[index].style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".membership-card");
    let index = 0;

    function animateCard() {
        if (index < cards.length) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.style.transform = "scale(1.05)";
                } else {
                    card.style.transform = "scale(1)";
                }
            });

            index++;
            setTimeout(animateCard, 1000);
        } else {
            index = 0;
            setTimeout(animateCard, 1000);
        }
    }

    animateCard();
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const timestampField = document.getElementById("timestamp");

    timestampField.value = new Date().toLocaleString();

    form.addEventListener("submit", (event) => {
        event.preventDefault();


        const formData = {
            firstName: form.elements["name"].value,
            lastName: form.elements["last-name"].value,
            email: form.elements["email"].value,
            phone: form.elements["phone"].value,
            businessName: form.elements["organization"].value,
            timestamp: timestampField.value
        };


        localStorage.setItem("formData", JSON.stringify(formData));


        window.location.href = "thankyou.html";
    });
});