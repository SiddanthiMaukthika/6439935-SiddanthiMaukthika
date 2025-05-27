// Store all events
const events = [];

// Add an event — basic function to push event to the list
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// Closure to track total registrations per category
function createCategoryTracker(category) {
  let totalRegistrations = 0;

  return function register() {
    totalRegistrations++;
    console.log(`Total registrations for ${category}: ${totalRegistrations}`);
  };
}

// Register user function with seat check and category registration tracking
function registerUser(event, onRegisterCallback) {
  if (event.seats <= 0) {
    throw new Error("No seats available for registration.");
  }
  event.seats--;
  console.log(`User registered for ${event.name}. Seats left: ${event.seats}`);

  if (onRegisterCallback) {
    onRegisterCallback();
  }
}

// Higher-order function to filter events dynamically using callback
function filterEventsByCategory(eventsList, filterCallback) {
  return eventsList.filter(filterCallback);
}
// Add some events
addEvent("Hackathon", "2025-07-20", 10, "Tech");
addEvent("Music Fest", "2025-08-15", 50, "Entertainment");
addEvent("Tech Talk", "2025-06-10", 5, "Tech");

// Create tracker for Tech category
const trackTechRegistrations = createCategoryTracker("Tech");

// Filter Tech events only
const techEvents = filterEventsByCategory(events, e => e.category === "Tech");
console.log("Tech Events:", techEvents);

// Register a user for the first Tech event
try {
  registerUser(techEvents[0], trackTechRegistrations);
} catch (error) {
  console.error(error.message);
}
