console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());

// knowing user /clients timezone

const date = new Date();

// use Intl.DateTimeFormat  to get the time zone

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log("Time Zone:", timeZone); //Africa / Nairobi

// Formating date and time using Date objects

/// 12-03-2025
//Tue 03rd March
// month -  date - year

const receivedDate = new Date("11/29/2025");

console.log(receivedDate.getFullYear());
console.log(receivedDate.getMonth()); // 0 january - 11 December
console.log(receivedDate.getDate());
console.log(receivedDate.getDay()); // Day of the week from 0 sunday to saturday
