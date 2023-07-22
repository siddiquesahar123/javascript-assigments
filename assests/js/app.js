// 1.// Write a custom function power ( a, b ), to calculate the value of
// // a raised to b.
// function power(a, b){
//     return Math.pow(a, b);
// }
// let raised = power(4, 3);
// console.log("The power of a is "+ raised);

// 2.Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// function leapyear(year) {
//    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
//  let year = parseInt(prompt("Enter the leap year"));
//  let  isLeapYear = leapyear(year);
//  if ( isLeapYear) {
//     console.log(year + " is a leap year ");
//  }
//  else {
//     console.log(year + " is not a leap year")}

// 3.If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function where(a, b, c){
//     return ( a + b + c ) / 2
// }
// function calculateTriangle(a, b, c){
//     let s = where(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// let sideA = 6;
// let sideB = 8;
// let sideC = 9;
// let result = calculateTriangle(sideA, sideB, sideC);
// console.log("The area of triangle is " + result);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function averageStudent(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }
// function calculatePercentage (totalMarks, obtainedMarks) {
//    return (obtainedMarks / totalMarks) * 100
// }
// function overAll (subject1, subject2, subject3) {
//     let average = averageStudent(subject1, subject2, subject3)
//     let percentage = calculatePercentage(100, subject1 + subject2 + subject3)
//     console.log("Average Students: " + average.toFixed(2) );
//     console.log("Percentage: " + percentage.toFixed(2) + " %");
// }
// overAll(80, 70, 90);

// 5.You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function customIndexOf(string, searchChar){
//     let index = 0;
//     while(index < string.length){
//         if (string[index] === searchChar) {
//             return index;
            
//         }
//         index++
//     }
//     return -1;
// }
// let str = "Hello Sahar";
// let char = "o"
// let result = customIndexOf(str, char);
// console.log("Index of ' " + char + " ' in the string is " + result);

// 6.Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// function deleteCharacter(sentence) {
//     let vowels =["a", "e", "i", "o", "u"];
//     let result = '';
//     let i = 0;
//     while (i < sentence.length) {
//         if(!vowels.includes(sentence[i].toLowerCase())){
//             result += sentence[i]
//         }
//         i++
//     }
//     return result;
// }
// let sentence = "Hello world!";
// let result = deleteCharacter(sentence);
// document.write(result);

// 7.Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function character (text){
//     let count = 0;
//     let vowels =["a", "e", "i", "o", "u"];
//     for (let i = 0; i < text.length -1; i++){
//         let currentChar = text[i].toLowerCase();
//         let nowChar = text[i + 1].toLowerCase();
    
//     switch (currentChar) {
//         case 'a':
//         if (vowels.includes(nowChar)) {
//             count ++;
//         }
//         break;
//         case 'e':
//             if (vowels.includes(nowChar)) {
//                 count ++;
//             }
//             break;
//             case 'i':
//                 if (vowels.includes(nowChar)) {
//                     count ++;
//                 }
//                 break;
//                 case 'o':
//                     if (vowels.includes(nowChar)) {
//                         count ++;
//                     }
//                     break;
//                     case 'u':
//                         if (vowels.includes(nowChar)) {
//                             count ++;
//                         }
//                         break;
//                         default:
//                         break;
//     }
// }
//     return count;
// }
// let sentence = "Pleases read this application and give me gratuity"; 
// let result = character(sentence);
// console.log(result);


// 8.The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// function convertToMeters(distanceInKm){
//     return distanceInKm* 1000;
// }
// function convertToFeet(distanceInKm){
//     return distanceInKm * 3280.84;
// }
// function convertToInches (distanceInKm) {
//     return distanceInKm * 39370.1;
// }
// function convertToCentimeters (distanceInKm) {
//     return distanceInKm * 100000;
// }
// function print(distanceInKm){
//     let distanceToMeters = convertToMeters(distanceInKm);
//     let distanceToFeet = convertToFeet(distanceInKm);
//     let distanceToInches = convertToInches(distanceInKm);
//     let distanceToCentimeters = convertToCentimeters(distanceInKm);
//     console.log("distance in meters " + distanceToMeters);
//     console.log("distance in feet " + distanceToFeet);
//     console.log("distance in inches " + distanceToInches);
//     console.log("distance in centimeters " + distanceToCentimeters);
// }
// let distanceKm = parseInt(prompt("Enter the distance between two cities in km:"));
// print(distanceInKm);

// 9.Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function calculateOvertimePay (hoursWork){
//     let overtimeRate = 12.00;
//     let regularHours = 40;
//     let overtimeHours = Math.max(hoursWork - regularHours , 0);
//     let overtimePay = regularHours * overtimeRate;
//     return overtimePay;
// }
// let hours = parseInt(prompt("Enter the overtime hours:"));
// let result = calculateOvertimePay(hours);
// document.write("Overtime Pay is " + result.toFixed(2));


  
  