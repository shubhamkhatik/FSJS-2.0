let arrEven = [];
let arrOdd = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        arrEven.push(i)
    } else {
        arrOdd.push(i)
    }
}
console.log(arrEven);
console.log(arrOdd)