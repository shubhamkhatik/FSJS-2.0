function getDays(year, month) {
  const days = new Date(year, month, 0).getDate();

  return days;
}

console.log(getDays(2023, 1));

console.log(getDays(2023, 2));

console.log(getDays(2023, 3));
