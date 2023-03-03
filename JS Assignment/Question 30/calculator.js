function calculator(operator, num1, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Cannot divide by zero";
        } else {
          return num1 / num2;
        }
      default:
        return "Invalid operator";
    }
  }
  
  console.log(calculator("+", 5, 5)); // Output: 10
  console.log(calculator("-", 5, 4)); // Output: 1
  console.log(calculator("*", 5, 5)); // Output: 25
  console.log(calculator("/", 5, 2)); // Output: 2.5
  console.log(calculator("/", 5, 0)); // Output: "Cannot divide by zero"
  console.log(calculator("%", 5, 2)); // Output: "Invalid operator"