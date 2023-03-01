const Age = parseInt(prompt("Enter your age:"));
Age >= 18
  ? alert("You are old enough to drive")
  : alert(`Please wait for  ${18 - Age} years to start driving`);
