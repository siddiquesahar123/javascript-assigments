// Q:1 Declare and initialize an empty multidimensional array.
// (Array of arrays) 
// let arr = [];
// let activities = [
//     ["Work" , 9],
//     ["Eat ", 1],
//     ["Commute ", 2],
//     ["Play games ", 3],
//     ["Sleeping ", 7]
// ];
// console.table(activities);

// Q:2

// Q:3 Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Q:4Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let tableNumber = +prompt("Enter the number to show it multiplication table.");
// let tableLength = +prompt("Enter multiplication table.");

// for (i = 1; i <= tableLength; i++) {
//     result = tableNumber * i 
//     console.log(tableNumber + " * " + tableLength + " = " + result);
// }

// Q:5 Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple ", "banana ", "mango ", "orange ", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Q:6Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// console.log("Counting");

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// console.log("Reverse Counting");

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// console.log("Even:");
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
//  }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// console.log("Odd:");
// for (let i = 1; i <= 19; i += 2) {
//     console.log(i); 
// }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k;
// console.log("Series:");
// for (let i =1; i <= 10; i ++) {
//   console.log(i * 2 + "k");
// }

// Q:7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let arr = ["cake ", "cookie ", "chips ", "apple pie ", "patties"];
// let userInput = prompt("Enter an item to search:");
// if (arr.includes(userInput)) {
//     alert("Cookie is available in our bakery");
// }
// else{
//     alert("Cookie is not available in our bakery");
// }

// Q:8 Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// let arr = [24, 53, 78, 91, 12];
// let largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// document.write("The largest number is " + largest);

// Q:9 Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// let arr = [24, 53, 78, 91, 12];
// let smallest = arr[0]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }
// document.write("The smallest number is " + smallest);

// Q:10 Write a program to print multiples of 5 ranging 1 to 100
// for (i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write( i + " " + ",");
//     }
// }

  