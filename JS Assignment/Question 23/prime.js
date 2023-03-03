const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    console.log(i);
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(`${number} is a prime number`);
  } else {
    alert(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  alert("The number is negative number.");
}
