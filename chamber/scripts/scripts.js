// Dynamically set the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

document.querySelector('#menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('show');
});

const container = document.getElementById('members-container');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    container.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.classList.add(`level-${member.membership}`);

        card.innerHTML = `
        <img class="img" src="images/${member.image}" alt="${member.name}" />
        <div class="member-info">
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
      `;

        container.appendChild(card);
    });
}

// Set grid view as default
container.classList.add('grid');
container.classList.remove('list');
gridBtn.classList.add('active'); // Set the grid button as active by default

gridBtn.addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});

getMembers();