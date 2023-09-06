function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / Math.pow(height, 2));
    var interpretation;

if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight."
} 

if (bmi > 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
} 

if (bmi > 24.9) {
    interpretation ="Your BMI is " + bmi + ", so you are overweight."
} 

return interpretation;

}