// Event constructor
function Event(name, date, seats) {
  this.name = name;
  this.date = new Date(date);
  this.seats = seats;
}

// Add method to prototype (shared by all Event instances)
Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

// Create an instance
const hackathon = new Event("Hackathon", "2025-07-20", 10);

// Check availability
console.log(`${hackathon.name} availability:`, hackathon.checkAvailability()); // true

// List keys and values using Object.entries()
console.log("Event details:");
Object.entries(hackathon).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
