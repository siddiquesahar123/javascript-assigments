// 1. Write a function that displays current date & time in your
// browser.
// function date() {
//     let now = new Date();
//     alert(now);
// }
// date();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// function greets () {
//     let first = "Sahar";
//     let last = "Aziz";
//     alert(first + " " + last);
// }
// greets();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addNumbers () {
//   let num1 = parseInt(prompt("Enter the first number:"));
//   let num2 = parseInt(prompt("Enter the second number:"));
//   let sum = num1 + num2;
//   return sum;
// }
// let result = addNumbers();
// console.log("The sum is " + result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calc(num1,opr,num2) {
//     if(opr === "+"){
//        return num1 + num2;
//     }
//     else if(opr === "-") {
//         return num1 - num2;
//     }
//     else if(opr === "*") {
//         return num1 * num2;
//     }
//     else if(opr === "/") {
//         return num1 / num2;
//     }
//     else if(opr === "%") {
//         return num1 % num2;
//     }
//     else{
//        return "Incorrect operator!";
//     }
// }
// let result = calc(4, "+" ,2);
// let result1 = calc(26, "/", 4);
// let result2 = calc(2, "$" ,5);
// console.log(result);
// console.log(result1);
// console.log(result2);

// 5. Write a function that squares its argument.

// function squares(number){
//     return number * number;
// }
// let num = 4;
// let result = squares(num);
// console.log("The square of " + num + " is " + result + ".");

// 6. Write a function that computes factorial of a number.

// function factorial(n){
// let answer = 1
//    if (n == 0 || n == 1) {
//    return answer;
//    }
// //    num * factorial(num - 1);
// else if(n > 1){
//     for(var i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
// }
// else {
//     return "Number has to be positive"
// }
// }
// let n = 5;
// answer = factorial(n);
// console.log("The fractional of " + n + " is " + answer);
   
// 7. Write a function that take start and end number as inputs
// & display counting in your browser

// function count(start,end){
//     if (start <= end) {
//         for (let i = start; i <= end; i++){
//             document.write(i + "<br>");
//         }
//     }
// else {
//     for (let j = start; j <= end; j++) {
//         document.write(j + "<br>");
//     }
// }
// }
// let start = 1;
// let end = 10;
// count(start,end);
  
// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculatesAreaRectangle(width,height){
//     let a = width * height;
//     return a;
// }
// let a1 = calculatesAreaRectangle(5, 10);
// document.write("The calculate rectangle area is " + a1);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development
  
//  function findLongestWords(str) {
//     let word = str.split(' ');
//     let longestWords = ' ';
//     for (i = 0; i < word.length; i++) {
//         if (word[1].length > longestWords.length) {
//             longestWords = word[i]
//         }
//     }
//     return longestWords;
// } 
// let str = "Web Development Tutorial";
// let longestWords = findLongestWords(str);
// document.write(longestWords); 

//14. Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius){
//     let circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
// }

// function calcArea (radius) {
//     let area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area)
// }
// let radius = 5;
// calcCircumference(radius);
// calcArea(radius);
