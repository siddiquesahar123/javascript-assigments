// 1. Write a program that displays current date and time in
// your browser.
// let todayDate = new Date ();

// document.write("Current date and time: " + todayDate);

// 2. Write a program that alerts the current month in words.
// For example December.

// Get the month from the current date (0-based index)
// let monthsName = ["Jan", "Feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"];
// let date = new Date();
// let month = date.getMonth();
// let nameOfMonth = monthsName[month];
// document.write("Current month: " + nameOfMonth);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  alert("Today is " + nameOfToday);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let currentDate = new Date ();
// let currentDay = currentDate.getDate();
// if (currentDay < 16) {
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// let date = new Date ();
// let time = date.getTime();
// let minutes = date.getMinutes();
// let diff = time - minutes;
// let diffMin = diff / (1000 * 60 * 60);
// let accurateMin = Math.floor(diffMin);
// document.write("Current date: " + date + "<br>");
// document.write("Elapsed milliseconds since, Jan 1, 1970: " + time + "<br>");
// document.write("Elapsed minutes since , Jan 1, 1970: " + accurateMin);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let date = new Date ();
// let hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let date = new Date (2020, 11, 31);
// document.write("Later date: " + date);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?

// let startingDate = new Date (2015, 5, 18);
// let todayDate = new Date ();
// let diff = todayDate - startingDate;
// let passed = Math.floor(diff/ (1000 * 60* 60 * 24));
// alert(passed + " days have passed since 1st Ramadan, 2015");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// let beginning = new Date (2015, 12, 1);
// let date = new Date ();
// let diff = date - beginning;
// let reference = Math.floor(diff / 1000);
// document.write("On reference date " + beginning + " , " + reference + " seconds have passed since beginning of 2015");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// let currentDate = new Date ();
// let hours = currentDate.getHours();
// currentDate.setHours(hours + 1);
// document.write("currentDate " + currentDate + " " + hours + " hours " + " , it was "+ " " + currentDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
//  let date = new Date ();
//  date.setFullYear (date.getFullYear() - 100);
// document.write("Current date " + date );

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser. 

// let age = +prompt("Enter your age:");
// let year = new Date ().getFullYear();
// let currentYear = year - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + currentYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// let customerName = prompt("Enter your name:");
// let units = parseInt(prompt("Enter the current units:"));
// let charges = parseInt(prompt("Enter the charges per units:"));
// let late = parseInt(prompt("Enter the late payment surcharges")); 

// let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

// let currentMonth = months[new Date().getMonth()];
// let netAmount = (units * charges).toFixed(2);
// let grossAmount = (parseInt(netAmount) + late).toFixed(2);

// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month Name: " + currentMonth + "<br>");
// document.write("Number of units: " + units + "<br>");
// document.write("Charges per Unit: " + charges.toFixed(2) + "<br>")
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>")
// document.write("Late payment surcharges: " + late.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount);