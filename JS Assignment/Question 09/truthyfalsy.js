/**09. Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value. */



/**
 * MDN Docs => all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.
 */
// truthy value

let myVariable = "shu";
if (myVariable) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let myValue = "Hello";
if (!!myValue) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let myArray = [1, 2, 3];
if (myArray.length) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

// falsy value
let integer = 0;
if (integer) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let emptystr = "";
if (emptystr) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

let emptyArray = [];
if (emptyArray.length) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
