const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
ages.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
// sort==> value[output]<0 means first value and value[output] > 0 means second value

const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`The minimum age is: ${minAge} and maximum age is: ${maxAge}`);

// another method for min max
let minAge1 = Math.min.apply(null, ages);
let maxAge1 = Math.max.apply(null, ages);

console.log("Minimum age: " + minAge1);
console.log("Maximum age: " + maxAge1);

//Find the median age(one middle item or two middle items divided by two)

const middleIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  const median = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
  console.log(`The meadian age is: ${median}`);
} else {
  const median = ages[middleIndex];
  console.log(`The meadian age is: ${median}`);
}


//Find the average age(all items divided by number of items
let sum = 0;
ages.forEach((item) => {
  sum += item;
});
const averageAge = sum / ages.length;
console.log(`The average age is: ${averageAge}`);

//Find the range of the ages(max minus min)
const ageRange = ages[ages.length - 1] - ages[0];
console.log(`The Range is ${ageRange}`);

//Compare the value of (min - average) and (max - average), use abs() method
const minMinusAverage = Math.abs(ages[0] - averageAge);
const maxMinusAverage = Math.abs(ages[ages.length - 1] - averageAge);
// console.log(minMinusAverage, maxMinusAverage);
if (minMinusAverage > maxMinusAverage) {
  console.log("min-average is greater than max-average");
} else if (minMinusAverage < maxMinusAverage) {
  console.log("max minus average is greater than min-average");
} else {
  console.log("Both are equal");
}
