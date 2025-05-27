const spinner = document.querySelector("#spinner");
const container = document.querySelector("#event-container");

spinner.style.display = "block"; // Show spinner

fetch("https://mockapi.io/your-events-endpoint") // Replace with real/mock URL
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(events => {
    spinner.style.display = "none"; // Hide spinner
    container.innerHTML = events.map(e => `<div>${e.name} (${e.date})</div>`).join("");
  })
  .catch(error => {
    spinner.style.display = "none";
    container.textContent = "Failed to load events: " + error.message;
  });
async function loadEvents() {
  spinner.style.display = "block";

  try {
    const response = await fetch("https://mockapi.io/your-events-endpoint");
    if (!response.ok) throw new Error("Network response was not ok");

    const events = await response.json();
    spinner.style.display = "none";

    container.innerHTML = events.map(e => `<div>${e.name} (${e.date})</div>`).join("");
  } catch (error) {
    spinner.style.display = "none";
    container.textContent = "Failed to load events: " + error.message;
  }
}

// Call it to load events
loadEvents();
