const events = [
  { name: "Code Sprint", date: "2025-05-01", seats: 0 },
  { name: "Hackathon", date: "2025-07-20", seats: 15 },
  { name: "Tech Talk", date: "2024-12-31", seats: 5 },
];
const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);

  if (eventDate <= today) {
    // Past event, skip showing
    console.log(`Skipping past event: ${event.name}`);
    return;
  }

  if (event.seats <= 0) {
    // No seats left, skip showing
    console.log(`Skipping full event: ${event.name}`);
    return;
  }

  // Display valid event
  console.log(`Upcoming Event: ${event.name} on ${event.date} | Seats: ${event.seats}`);

  // Try to register a user for this event
  try {
    registerUser(event);
  } catch (error) {
    console.error(`Error registering for ${event.name}:`, error.message);
  }
});

function registerUser(event) {
  if (event.seats <= 0) {
    throw new Error("No seats available for registration.");
  }

  // Register user: reduce seats
  event.seats--;
  console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
}
