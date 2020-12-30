function getOrdinalSuffix(number) {
  modTen = number % 10;
  if (modTen > 3 || [11, 12, 13].includes(number)) return 'th';
  switch (modTen) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
  }
}

function formattedMonth(date) {
  const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 
    'May', 'Jun', 'Jul', 'Aug', 
    'Sep', 'Oct', 'Nov', 'Dec'
  ]

  return MONTHS[date.getMonth()];
}

function formattedDay(date) {
  day = date.getDate();
  return String(day) + getOrdinalSuffix(day);
}

function dow(date) {
  const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return DAYS_OF_WEEK[date.getDay()];
}

function formattedDate(date) {
  return `${dow(date)}, ${formattedMonth(date)} ${formattedDay(date)}`;
}

function formatTime(date) {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}

function todaysDate() {
  return `Today's date is ${formattedDate(new Date())}.`;
}

let today = new Date();
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(formatTime(today));