// Default parameter for category = 'all'
const filterEvents = (eventsList, category = 'all') => {
  // Clone the array to avoid mutating original
  const eventsCopy = [...eventsList];

  // Filter with destructuring and concise arrow function
  return eventsCopy.filter(({ category: cat }) => category === 'all' || cat === category);
};

// Destructure event properties directly in function params
const formatEventCard = ({ name, category, seats }) => `
  <div class="event-card">
    <h3>${name}</h3>
    <p>Category: ${category}</p>
    <p>Seats available: ${seats}</p>
  </div>
`;

// Example usage:
const events = [
  { name: "Jazz Night", category: "Music", seats: 0 },
  { name: "Coding Workshop", category: "Tech", seats: 5 },
  { name: "Baking Class", category: "Food", seats: 3 },
];

// Use default param to get all events if no category specified
const musicEvents = filterEvents(events, 'Music');

console.log(musicEvents);

const formatted = musicEvents.map(formatEventCard).join("");
console.log(formatted);
