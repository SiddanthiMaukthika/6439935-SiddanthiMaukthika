const events = [
  { name: "Coding Workshop", category: "Tech", seats: 5 },
  { name: "Jazz Night", category: "Music", seats: 0 },
  { name: "Baking Workshop", category: "Food", seats: 3 },
  { name: "Rock Concert", category: "Music", seats: 10 },
];

const container = document.querySelector("#event-container");
const categoryFilter = document.querySelector("#category-filter");
const searchBox = document.querySelector("#search-box");

let filteredEvents = [...events];

// Render function
function renderEvents(list) {
  container.innerHTML = "";
  if (list.length === 0) {
    container.textContent = "No events found.";
    return;
  }

  list.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = `Seats available: ${event.seats}`;

    const btn = document.createElement("button");
    btn.textContent = event.seats > 0 ? "Register" : "Full";
    btn.disabled = event.seats === 0;
    btn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        applyFilters();
      }
    };

    card.append(title, seats, btn);
    container.appendChild(card);
  });
}

// Filter events based on category and search text
function applyFilters() {
  const category = categoryFilter.value;
  const searchText = searchBox.value.toLowerCase();

  filteredEvents = events.filter(event => {
    const matchCategory = category === "all" || event.category === category;
    const matchName = event.name.toLowerCase().includes(searchText);
    return matchCategory && matchName;
  });

  renderEvents(filteredEvents);
}

// Event listeners for filtering and searching
categoryFilter.onchange = applyFilters;
searchBox.onkeydown = (e) => {
  // Trigger search on Enter key (key code 13)
  if (e.key === "Enter") {
    applyFilters();
  }
};

// Initial render
renderEvents(events);
