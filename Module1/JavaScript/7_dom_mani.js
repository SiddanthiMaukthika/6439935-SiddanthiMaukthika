const events = [
  { name: "Coding Workshop", seats: 5 },
  { name: "Jazz Night", seats: 0 },
  { name: "Baking Workshop", seats: 3 },
];

// Grab the container once
const container = document.querySelector("#event-container");

// Function to create and append event cards
function renderEvents() {
  container.innerHTML = ""; // Clear old stuff before re-rendering

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = `Seats available: ${event.seats}`;

    const btn = document.createElement("button");
    btn.textContent = event.seats > 0 ? "Register" : "Full";
    btn.disabled = event.seats === 0;

    // Register click event to handle seat update
    btn.addEventListener("click", () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(); // Refresh UI after update
      }
    });

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

// Initial render
renderEvents();
