
function addZero(params) {
    if (params < 10) {
         params = "0" + params;
        return params;
    }
    return params;
}

const date = new Date();

const year = date.getFullYear();

let month = date.getMonth() + 1;
month = addZero(month);

let dateToday = date.getDate();
dateToday = addZero(dateToday);

let hours = date.getHours();
hours = addZero(hours);

let mins = date.getMinutes();
mins = addZero(mins)



//- YYYY-MM-DD HH:mm
const dateFormat1 = `${year}-${month}-${dateToday} ${hours}:${mins}`;
//- DD-MM-YYYY HH:mm
const dateFormat2 = `${dateToday}-${month}-${year} ${hours}:${mins}`;
//- DD/MM/YYYY HH:mm
const dateFormat3 = `${dateToday}/${month}/${year} ${hours}:${mins}`;


console.log(`Date Format 1:${dateFormat1}
Date Format 2: ${dateFormat2}
Date Format 3: ${dateFormat3}`)