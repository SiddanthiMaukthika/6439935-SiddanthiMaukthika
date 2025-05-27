// Starting array of events (objects with type/category)
const events = [
  { name: "Coding Workshop", category: "Tech" },
  { name: "Jazz Night", category: "Music" },
  { name: "Baking Workshop", category: "Food" },
];

// 1. Add a new event with .push()
events.push({ name: "Rock Concert", category: "Music" });

// 2. Filter only music events
const musicEvents = events.filter(event => event.category === "Music");

// 3. Map to format display cards (simple strings here)
const displayCards = musicEvents.map(event => `${event.name}`);

console.log("All events:", events);
console.log("Music events:", musicEvents);
console.log("Display cards:", displayCards);
