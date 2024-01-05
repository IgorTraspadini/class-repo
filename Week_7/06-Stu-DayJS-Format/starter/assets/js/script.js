// Use Day.js.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
const gradDate = "12/01/2011";
$("#1a").text(dayjs(gradDate).format("MMM D, YYYY"));

// TODO: 2. What day of the week will 1/1/2027 be?
const weekDay = "01/01/2027";
$("#2a").text(dayjs(weekDay).format("dddd"));

// TODO: 3. What is the difference in days between May 4, 2027 and today?
const now = dayjs();
const days = dayjs("05/04/2027");
$("#3a").text(days.diff(now,"day"));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
const time = dayjs();
$("#4a").text(time.format("HH:mm:ss"));

// TODO: 5. What is the current Unix timestamp?
const unix = dayjs().unix() ;
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const unixFormat = dayjs.unix('1318781876');
$("#6a").text(unixFormat.format("DD/MM/YYYY HH:mm:ss"));

