
function dateFromDays (date, days ){

  const milliDay =24 *60 * 60 * 1000;
  const dateMilli = Number (date);

  const newDateInMilli = dateMilli + days * milliDay;
  return new Date (newDateInMilli);

}

const initialDate = new date("2024/2/10");
const finalDate = dateFromDays(initialDate, 15);
console.log (initialDate.toLocaleDateString(),finalDate.toLocaleDateString());