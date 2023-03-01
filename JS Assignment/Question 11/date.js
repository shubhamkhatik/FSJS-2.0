const date = new Date();
// - What is the year today?
const year = date.getFullYear();
console.log(`The current Year is: ${year}`);


// - What is the month today as a number?
const month = date.getMonth(); //  month starts from 0 & ends at 11
console.log(`The month number in JS is: ${month} and as per our calender is: ${month + 1}`);


// - What is the date today?
const dateToday = date.getDate();
console.log(`Today's date : ${dateToday}`);


// - What is the day today as a number?
const day = date.getDay();
console.log(`Current Day is ${day}`) // day starts from 0  sunday and ends at 6 saturday.


// - What is the hours now?
const hrs = date.getHours();
console.log(`Current Hours are ${hrs}`);


// - What is the minutes now?
const mins = date.getMinutes();
console.log(`Current minutes are ${mins}`);


// - numbers of seconds elapsed from January 1, 1970 to now.
const miliSeconds = date.getTime(); // getTime() method  return milliseconds elapsed from Jan 1, 1970
const seconds = miliSeconds / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 : ${seconds}`);



