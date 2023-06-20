// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter the first name..");
// let lastName = prompt("Enter the last name..");
// let fullName = firstName + " " + lastName;
// document.write("Hello, " + fullName + "! Welcome!");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// let favoriteModel = prompt("Enter your favorite mobile phone model:");
// let inputLength = favoriteModel.length;
// document.write("The length of your input is: " + inputLength);

// 3.Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let countryName = "Pakistani";
// document.write(countryName + "<br>");
// let firstChar = countryName.indexOf("n");

// document.write("Index of 'n' is " + firstChar);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let firstName = "Hello World";
// document.write(firstName + "<br>");
// let lastIndex = firstName.lastIndexOf("l");

// document.write("Index of 'l' is " + lastIndex);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let countryName = "Pakistani";
// document.write(countryName + "<br>");
// let char = countryName.charAt(3);
// document.write("Character at index 3 is " + char);

// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter the first name..");
// let lastName = prompt("Enter the last name..");
// let fullName = firstName.concat(" " + lastName);
// document.write("Hello! " + fullName + "! Welcome!");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad";
// let replaceWord = city.replace("Hyder" , "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + replaceWord);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replaceWord = message.replace(/and/g , "&");
// document.write(message + "<br>");
// document.write(replaceWord);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let stringNumber ="472";
// document.write("The value of of: " + stringNumber + "<br>");
// document.write("Type of: " + typeof(stringNumber) + "<br>");
// let converted = parseInt(stringNumber);
// document.write("The value of of: " + stringNumber + "<br>");
// document.write("Type of: " + typeof(converted) + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let userInput = prompt("Enrer the input:")
// let capital = userInput.toUpperCase();
// document.write(capital);
// 11. Write a program that takes user input. Convert and
// show the input in title case.

// function toTitleCase(str) {
//     let words = str.toLowerCase().split('');
//      for (let i = 0; i < words.length; i++) {
//          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//      }
//      return words.join(' ');
//  }
//  let userInput = prompt("Enter the sentence:");
//  let titleCase = toTitleCase(userInput);
//  document.write("Title case: " + titleCase);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let num = 35.36;
// document.write("Number: " + num + "<br>");
// let string = num.toString();
// let replace = string.replace("." , "");
// document.write("Result: " + replace);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let ascii_of_! = 33;
// let ascii_of_. = 44;
// let ASCII_of_, = 46;
// let ASCII_of_@ = 64;
// let userName = prompt("enter a valid username");

// let specialSymbols = false;
// for (let i = 0; i < userName.length; i++) {
//     let char = userName[i];
//     let charAt = userName.charCodeAt[i];
//     if (char === "!" || char === "." || char === "," || char === "@" ) {
//         specialSymbols = true;
//         break;
//     }
// }
// if (specialSymbols){
//     alert("Please enter a valid username without any special symbol");

// }
// else{
//     alert("Username stored successfully: "+ userName);
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let cookie = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Please enter an item:");
// found = false;
// for (let i = 0; i < cookie.length; i++){
//     if (cookie[i].toLowerCase() === userInput[i].toLowerCase()) {
//         found = true;
//         break;
//     }
// }
// if(found){
//     alert("Cookie is available: ");
// }
// else{ 
//     alert("Sorry cookie is not available:");
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let ascii_of_0 = 49;
// let ascii_of_small_a = 97
// let ascii_of_capital_A = 65;

// let password = prompt("Please enter a valid password:");
// let flag = false;
// if (password.length < 6) {
//     flag = true;
// }
// let count = 0;
// for (let i = 0; i < password.length; i++) {
// let password_1 = password.charCodeAt(i);
// for (let j = ascii_of_0; j < 58; j++) {
//     if (password_1 === j) {
//         count +=1;
//     }
// }
// }
// let count_1 = 0;
// for (let i = 0; i < password.length; i++) {
// let password_1 = password.charCodeAt(i);
// for (let j = ascii_of_small_a; j < 123; j++) {
//     if (password_1 === j) {
//         count_1 +=1;
//     }
// }
// }
// let count_2 = 0;
// for (let i = 0; i < password.length; i++) {
// let password_1 = password.charCodeAt(i);
// for (let j = ascii_of_capital_A; j < 91; j++) {
//     if (password_1 === j) {
//         count_2 +=1;
//     }
// }
// }
// let count_3 = 1;
// let password_1 = password.charCodeAt(0);
// for (let i = ascii_of_0; i < 58; i++) {
// if (password_1 === i) {
//     count_3 +=1
// }
// }
// if (flag === true && count === 0) { 
//     prompt ("Your password length is smaller than is 6 \n does not contain number\n enter a new password: ");
// }
// else if (flag === true && count_1 === 0) {
// prompt("Your password length is smaller than is 6 \n does not contain small alphabet \n enter a new password: ");
// }
// else if (flag === true && count_3 >= 1) {
//     prompt("does not contain number \n first index is number \n enter a new password: ");
// }
// else if (count === 0 && count_1 === 0) {
//     prompt("does not contain number \n does not contain small alphabet \n enter a new password: ");
// }
// else if (count === 0 && count_3 >= 1) {
//     prompt("does not contain small alphabet \n first index is a number \n enter a new password");
// }
// else if (flag === true) {
//     prompt("Your password length is smaller than is 6 \n enter a new password:");
// }
// else if (count === 0) {
//     prompt("does not contain number \n enter a new password:");
// }
// else if (count_1 === 0) {
//     prompt(" does not contain small alphabet \n enter a new password:");
// }
// else if (count_3 >= 1){
//     prompt("first index is a number \n enter a new password: ");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = "University of Karachi";
// let array = university.split("");
// for (let i = 0; i < array.length; i++) {
//    document.write(array[i] + "<br>");
// }

// 17. Write a program to display the last character of a user
// input.
// let userInput = prompt("Enter the character:");
// let char = userInput.charAt(userInput.length - 1);
// alert("Last character of input is: " + char);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let string = "The quick brown fox jumps over the lazy dog";
// let word = "the";
// let sentence = string.toLowerCase();
// let words = sentence.split(" ");
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//    if(words[i] === word.toLowerCase()){
//     count++;
//    }
// }
// document.write(`There are ${count} occurrence (s) of word "${word}" .`);
