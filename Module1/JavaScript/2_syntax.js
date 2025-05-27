const eventName = "Community Coding Jam";
const eventDate = "2025-06-15";
let availableSeats = 30;
// Register one attendee (someone just signed up)
availableSeats--; // one less seat now
const eventInfo = `Event: ${eventName} | Date: ${eventDate} | Seats Left: ${availableSeats}`;

console.log(eventInfo);
