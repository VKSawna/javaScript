const myDate =new Date();

console.log(myDate); // Current date and time
 
const birthday = new Date("1995,07,27");
console.log(birthday.toString()); // Specific date and time

const newdate = new Date(2025);
console.log(newdate.toDateString()); // Specific date and time

console.log(myDate.toISOString()); // Convert date to ISO string format


const nd = new Date("2025"