/***************************
*  JS Code Challenge 01
*/
/*
Mark and John are trying to compare their BMI (Body Mass index), which is calculated using the formula: BMI = mass / (height * height). Hint mass in kg and height in meter
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about wheter Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (Someting like "Us Marks's BMI higher than John's? true").
Good luck :-)
*/


/***************************
*  Solution for JS Challenge 01
*  
*/

var xPersonName, yPersonName, xPersonHeightInMeter, xPersonWeightInKg, xPersonCalculatedBMI, yPersonHeightInMeter, yPersonWeightInKg, yPersonCalculatedBMI, xPersonHasHigherBMI;
xPersonName = prompt('Please enter your name');
xPersonWeightInKg = prompt('Please enter your Weight in kilogram');
xPersonHeightInMeter = prompt('Please enter your Height in meter. Hint use dot as a decimal separator');
xPersonCalculatedBMI = (xPersonWeightInKg / (xPersonHeightInMeter * xPersonHeightInMeter));
console.log( xPersonName+ ' has a BMI at ' + xPersonCalculatedBMI);
yPersonName = prompt('Please enter your name');
yPersonWeightInKg = prompt('Please enter your Weight in kilogram');
yPersonHeightInMeter = prompt('Please enter your Height in meter. Hint use dot as a decimal separator');
yPersonCalculatedBMI = (yPersonWeightInKg / (yPersonHeightInMeter * yPersonHeightInMeter));
console.log( yPersonName +' Mark has a BMI at ' + yPersonCalculatedBMI);
if (xPersonCalculatedBMI > yPersonCalculatedBMI) {
    alert(xPersonName + '\'s BMI is higher than ' + yPersonName + '\'s.');
    console.log(xPersonName + '\'s BMI is higher than ' + yPersonName + '\'s.');
} else {
    alert(yPersonName + '\'s BMI is higher than ' + xPersonName + '\'s.');
    console.log(yPersonName + '\'s BMI is higher than ' + xPersonName + '\'s.');
}
