// - 4 > 3  --> false
console.log(- 4 > 3)

// - 4 >= 3 -->false
console.log(- 4 >= 3)

// - 4 < 3 --> true
console.log(- 4 < 3)

// - 4 <= 3 --> true
console.log(- 4 <= 3)

//- 4 == 4 --> false
console.log(- 4 == 4)

// - 4 === 4 --> false
console.log(- 4 === 4)

// - 4 != 4 --> true
console.log(- 4 != 4)

// - 4 !== 4 --> true
console.log(- 4 !== 4)

//- 4 != '4' --> true
console.log(- 4 != '4')

//- 4 == '4' --> false
console.log(- 4 == '4')

// - 4 === '4' --> false
console.log(- 4 === '4')



const python = "python";
console.log(python.length); //6

const jargon = "jargon";
console.log(jargon.length); //6

if (python.length === jargon.length && python === jargon) {
  console.log("The comparison is truthy.");
} else {
  console.log("The comparison is falsy.");
}
