document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

async function getSpotlights() {
    const response = await fetch('data/reviews.json');
    const data = await response.json();
    const goldSilverMembers = data.filter(review => review.rating >= 2);

    const randomSpotlights = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.getElementById("reviews-container");
    container.innerHTML = "";

    randomSpotlights.forEach(review => {
        const card = document.createElement("div");
        card.classList.add("review-card");

        card.innerHTML = `
            <div class="reviews-info">
                <h3>${review.name}</h3>
                <p><strong>Review:</strong> ${review.review}</p>
                <p><strong>User name:</strong> ${review.user}</p>
                <a href="${review.link}" target="_blank">View Appartment</a>
                <p><strong><em>Rating: ${review.rating}</em></strong></p>
            </div>
        `;
        container.appendChild(card);
    });
}

getSpotlights();