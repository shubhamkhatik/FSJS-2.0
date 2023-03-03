function checkBmi(weight, height) {
    const bmi = (Math.round((weight / height ** 2) * 10)) / 10;
    console.log(`Your BMI is ${bmi}`);

    switch(true) {
        case (bmi < 18.5):
            console.log("You are underweight! ");
            break;
        case (bmi >= 18.5 && bmi <= 24.9):
            console.log("You are Normal Weight!");
            break;
        case (bmi >= 25 && bmi <= 29.9):
            console.log("You are Overweight! ");
            break;
        default:
            console.log("You are Obese!");
            break;
    }
}

// Please enter weight in kgs & height in meters
const personsWeight = 50;
const personsHeight = 1.5;
checkBmi(personsWeight, personsHeight);