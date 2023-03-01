// The switch (true) pattern as an alternative to if...else is especially useful if you want to utilize the fall-through behavior.


function giveGrade(score) {
    let grade;
    switch (true) {
      case score >= 80:
        grade = 'A';
        break;
      case score >= 70:
        grade = 'B';
        break;
      case score >= 60:
        grade = 'C';
        break;
      case score >= 50:
        grade = 'D';
        break;
      default:
        grade = 'F';
        break;
    }
    return grade;
  }
  
  console.log(giveGrade(80)); // Output: A
  console.log(giveGrade(79)); // Output: B
  console.log(giveGrade(60)); // Output: C
  console.log(giveGrade(50)); // Output: D
  console.log(giveGrade(38)); // Output: F
  