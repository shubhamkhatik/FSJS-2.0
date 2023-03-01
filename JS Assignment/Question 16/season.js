(function ok() {
  let userInput = prompt("Enter the month:");
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case "december":
    case "january":
    case "february":
      alert(`Season is Winter`);
      if (confirm('Do you want to check  again?')) {
        ok();
      }
      break;

    case "september":
    case "october":
    case "november":
      alert(`Season is Autumn `);
      if (confirm('Do you want to check again?')) {
        ok();
      }
      break;

    case "march":
    case "april":
    case "may":
      alert(`Season is Spring  `);
      if (confirm('Do you want to check again?')) {
        ok();
      }
      break;

    case "june":
    case "july":
    case "august":
      alert(`Season is Summer `);
      break;

    default:
      alert("check spelling of month you entered!");
      if (confirm('Do you want to check again?')) {
        ok();
      }
      break;
  }
})();
