function getDaysLeap(year, month){
    const days = new Date(year, month, 0).getDate();

    return days;
}

console.log(getDaysLeap(2000, 2))

console.log(getDaysLeap(2020, 2))

    