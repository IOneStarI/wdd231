const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const container = document.getElementById('appartments-container');

let apartmentData = [];

async function getAppartments() {
    const response = await fetch('data/appartments.json');
    const data = await response.json();
    apartmentData = data;
    displayAppartments();
}

function displayAppartments(sortBy = "all") {
    container.innerHTML = '';

    let sorted = [...apartmentData];

    if (sortBy === "price") {
        sorted.sort((a, b) => {
            const priceA = parseInt(a.price_per_day.replace(/\D/g, ""));
            const priceB = parseInt(b.price_per_day.replace(/\D/g, ""));
            return priceA - priceB;
        });
    } else if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    }

    sorted.forEach(appartment => {
        const card = document.createElement('div');
        card.classList.add('appartments-card');

        card.innerHTML = `
            <div class="appartments-info">
                <h2 class="appartments-name">${appartment.name}</h2>
                <img class="img" src="${appartment.photo_url}" alt="${appartment.name}" />
                <div class="appartments-content">
                    <p>${appartment.description}</p>
                    <p class="appartments-address"><strong>Rating:</strong> ${appartment.rating}</p>
                    <p class="appartments-price"><strong>Price:</strong> ${appartment.price_per_day}</p>
                </div>
                <div class="book-container" onclick="openModal(event)">
                    <strong>Book</strong>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function handleFilterClick(button, sortBy) {
    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayAppartments(sortBy);
}

getAppartments();

const modal = document.getElementById("booking-modal");
const closeBtn = document.querySelector(".close-btn");
const bookingForm = document.getElementById("booking-form");
const thankYou = document.getElementById("thank-you-message");

function openModal(event) {
    event.preventDefault();
    modal.style.display = "block";
    bookingForm.classList.remove("hidden");
    thankYou.classList.add("hidden");
    bookingForm.reset();
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    bookingForm.classList.add("hidden");
    thankYou.classList.remove("hidden");
    setTimeout(() => {
        modal.style.display = "none";
    }, 2000);
});