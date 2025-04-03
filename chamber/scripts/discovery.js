// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

const container = document.getElementById('places-container');

async function getPlacess() {
    const response = await fetch('data/places.json');
    const data = await response.json();
    displayplaces(data);
}

function displayplaces(places) {
    container.innerHTML = '';
    places.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('place-card');


        card.innerHTML = `
          <div class="place-info">
              <h2 class="place-name">${place.name}</h2>
              <img class="img" src="${place.photo_url}" alt="${place.name}" />
              <div class="place-content">
                  <p>${place.description}</p>
                  <p class="place-address"><strong>Address:</strong> ${place.address}</p>
                  <p class="place-price"><strong>Price:</strong> ${place.price}</p>
              </div>
              <div class="learn-more-button-container">
                  <a href="${place.website}" target="_blank" class="learn-more-button"><strong>Learn More</strong></a>
              </div>
          </div>
      `;
        container.appendChild(card);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarMessage = document.getElementById("sidebar-message");

    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    if (!lastVisit) {
        sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDifference = currentTime - lastVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            sidebarMessage.textContent = "Back so soon! Awesome!";
        } else {
            sidebarMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTime);

    setTimeout(() => {
        sidebar.classList.add("hide-sidebar");
    }, 5000);
});

getPlacess()