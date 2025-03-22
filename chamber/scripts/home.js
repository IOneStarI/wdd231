document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

const apiKey = "a93517ebf20c7e2aec594a1ba12c5d3f"
const city = "Kyiv";
const units = "metric";
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
        const current = data.list[0];
        const currentTemp = Math.round(current.main.temp);
        const descriptions = current.weather.map(w => capitalizeWords(w.description)).join(', ');

        document.getElementById("current-temp").textContent = currentTemp;
        document.getElementById("weather-desc").textContent = descriptions;

        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = "";

        const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        dailyForecasts.forEach(day => {
            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
            const temp = Math.round(day.main.temp);
            const desc = day.weather.map(w => capitalizeWords(w.description)).join(', ');

            const card = document.createElement("p");
            card.innerHTML = `<strong>${weekday}:</strong> ${temp}°C - ${desc}`;
            forecastContainer.appendChild(card);
        });
    })
    .catch(err => {
        console.error("Weather data error:", err);
        document.getElementById("weather-data").textContent = "Unable to load weather.";
    });

async function getSpotlights() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const goldSilverMembers = data.filter(member => member.membership >= 2);

    const randomSpotlights = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    randomSpotlights.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card", `level-${member.membership}`);

        card.innerHTML = `
            <img class="img" src="images/${member.image}" alt="${member.name}">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><em>Membership: ${member.membership === 3 ? 'Gold' : 'Silver'}</em></p>
            </div>
        `;
        container.appendChild(card);
    });
}

getSpotlights();