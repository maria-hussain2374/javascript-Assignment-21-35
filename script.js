///Question 1///
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let fname=prompt("enter first name");
// let lname=prompt("enter last name");
//  console.log(`AssalamoAlaikum ${fname} ${lname}`);


// question 02

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// let user=prompt('which mobile phone model would you like to buy? \n samsung\n nokia \n vivo \n oppo \n iphone' );
// console.log(`my favourite mobile model is ${user} and the length is ${user.length}`)



//question 3//
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let string="pakistani";
// console.log(`string: ${string} \n index of n ${string.indexOf("n")}`);


//question 4//
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let  input="Hello world";
// console.log(`input: ${input} \n  last index of "l" is : ${input.lastIndexOf("l")}`)


//question 5//

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let char="pakistani";
// console.log(`char:${char}  \n char at index 3 ${char.charAt(3)}`);


//question 6

// Repeat Q1 using string concat() method.
// let fname=prompt("enter first name");
// let lname=prompt("enter last name");
//  console.log(`AssalamoAlaikum ${fname.concat(lname)}`);



// question 7

//  Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// let city="hyderabad";
// console.log(`city:${city} \n After Replacement:${city.replace("hyder","islam")} `);

//question 8

// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message ="Ali and Sami are best friends.They play cricket and football together.";
// console.log(`${message.replaceAll("and","&")}`);


//question 9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let str="472";
// console.log(`value:${str} \n Type:string  \n value:${str.toString(str)}\n Type:Number`);


//question 10
// Write a program that takes user input. Convert and
// show the input in capital letters.

// let userinput="peanut";
// console.log(`userinput:${userinput} \n uppercase:${userinput.toUpperCase()}`)


//question 11

// Write a program that takes user input. Convert and
// show the input in title case.


// let userinput="javascript";
// console.log(` userinput:${userinput}  \n ${userinput.charAt(0).toUpperCase()+userinput.slice(1)}`);

//question 12

// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// let num=35.36;
// console.log(`num: ${num}   \n Result:${num.toString().replace(".","")}`);


// question 13

// . Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// let userinput=prompt("enter username");
// let specialchar=/[@.!]/;

// if(specialchar.test(userinput)){
// alert("invalid username");
// }else{
//     alert("valid username");
// }

//question 14//

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. 

// let a=["cake","applepie","cookie","chips","patties"];
// let user=prompt("welcome to abc bakery what would you like t order sir/madam  \n cake \n applepie \n cookie \n chips \n patties"  ).toLowerCase();
// let i=a.indexOf(user);
// if(a.includes(user)){
//      console.log(`${user} is available at our bakery at index ${i}`)
// }else{
//      console.log(` we are so sorry ${user} is not avaialable at our bakery`)
// }


//question 15//
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let password;

// while (true) {
// password = prompt("Enter a password: ");

// if (password.length < 6 || isNaN(password[0]) || !/[a-zA-Z0-9]/.test(password)) {
// alert("Invalid password. Try again!");
// } else {
// alert("Valid password!");
// break;
// }
// }

//question 16

// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.



// let university="university of karachi";
// console.log(`${university.split("")}`);



//question 17
// Write a program to display the last character of a user
// input.

// let userinput="pakistan";
// console.log(`last index of userinput is :${userinput.slice(-1)}`)


//question 18

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let str="The quick brown fox jumps over the lazy dog";

// let count = str.toLowerCase().split("the").length - 1;
// alert(count);


         ///math methods///
    //chp 26-30//


    //question 01//
//     Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let num=prompt("Enter a number");
// console.log(`number: ${num}`);
// console.log(`roundoff value:${Math.round(num)}`);
// console.log(`floor value:${Math.floor(num)}`);
// console.log(`ceil value:${Math.ceil(num)}`);



//question 02
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let num=prompt("ENTER NEGEATIVE FLOATING POINT");
// console.log(`number: ${num}`);
// console.log(`roundoff value:${Math.round(num)}`);
// console.log(`floor value:${Math.floor(num)}`);
// console.log(`ceil value:${Math.ceil(num)}`);



//question 3

// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let num=prompt("Enter a number");
// console.log(`The absolute value of a ${num} is ${Math.abs(num)}`)


//question 4
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// let dice=Math.floor(Math.random()*6)+1;
// console.log(`random dice value: ${dice}`);


//question 5

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
//     let coin=Math.floor(Math.random()*2)+1;
//     let result = coin === 1 ? "Heads" : "Tails";
// console.log(`Random coin value: ${result}`);



//question 06

// Write a program that shows a random number between 1
// and 100 in your browser.


// let num=Math.floor(Math.random()*100)+1;
// console.log(`random number between 0 to 100 is : ${num}`)



//question 07
// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
//   let user=prompt("kindly mentioned your weight");
//   let weight=parseFloat(user);
//   console.log(`The weight of user is ${user} kilograms`);
  

//question 08


// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// let secret=Math.floor(Math.random()*10)+1;
// let user=prompt("Enter a secret number between 01 to 10");
// let usernum=parseInt(user);
// if(usernum===secret){
//      console.log('congratulation you entered a right number');

// }else{
//      console.log("sorry you entered the wrong number")
// }



//chapter 31 - 34
// Question 01
// Write a program that displays current date and time in
// your browser.
// let date=new Date();
// console.log(date)

//question 02
// 2. Write a program that alerts the current month in words.
// For example December.
// let month=['january','february','march','april','may','june','july','august','september','october','november','December'];
// let date=new Date();

// let mon=date.getMonth();
// alert(month[mon])


//question 03
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// let date=new Date();
// let day=date.getDay();
// console.log(days[day].slice(0,3));


//question 04
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// let date=new Date();
//  let day=date.getDay();
//  let today=days[day];
//  if(today==='sunday'|| today==='saturday'){
//      alert("ITs a fun day")
//  };
 


//question 05

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let date=new Date();
// let today=date.getDate();
// let month=date.getMonth();
// if(today<16){
//      alert("first fifteen days of the month");

// }else{
//      alert("last days of the month");
// }

//question 06
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// let date=new Date();
// let milli=Math.floor(date.getTime() / (1000 * 60));
// console.log("new date",date)
// console.log("Elapsed milliseconds since jan 01 1970",milli);


//question 07
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let date=new Date();
// let hours=date.getHours();
// if(hours<12){
//      alert("It's AM");
// }else{
//      alert("It's PM");
// }

//question 08
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let date=new Date(2024/12/31);
// console.log("later date",date);


//question 09

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



// let ramadanStartDate = new Date('2015-06-18');
// let currentDate = new Date();
// let daysPast = Math.floor((currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24));

// alert(`${daysPast} days has passed since 1st ramadan 2015`);


//question 10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


// let referenceDate = new Date('1970-01-01');
// let beginningOfYear2015 = new Date('2025-01-19');
// let secondsElapsed = Math.floor((beginningOfYear2015 - referenceDate) / 1000);
// console.log
// (`our refrence date is :${referenceDate} seconds had passed since beginning of 2025`);



//question 11

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// let currentDate = new Date();
// console.log("Current Date and Time: " + currentDate);

// let hours = currentDate.getHours();
// console.log("Current Hour: " + hours);

// currentDate.setHours(hours + 1);
// console.log("Date and Time an hour ahead: " + currentDate);



//question 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// let currentDate = new Date();
// let year = currentDate.getFullYear();
// let pastDate = new Date(year - 100, currentDate.getMonth(), currentDate.getDate());

// alert("Date 100 years ago: " + pastDate);


//question 13
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


//    function calculateBirthYear() {
//      let age = document.getElementById("age").value;
//      let currentYear = new Date().getFullYear();
//      let birthYear = currentYear - age;
     
//      document.getElementById("result").innerHTML = `Your birth year is: ${birthYear}`;
//    }
   
//question 14
//  Write a program to generate your K-Electric bill in your
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
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

let customerName = prompt("Enter Customer Name:");
let currentMonth = prompt("Enter Current Month:");
let numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
let chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
let latePaymentSurcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));

// Calculate amounts
let netAmountPayable = numberOfUnits * chargesPerUnit;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// Round amounts to 2 decimal places
netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

// Display bill
document.write(`
  <h1>K-Electric Bill</h1>
  <p>Customer Name: ${customerName}</p>
  <p>Current Month: ${currentMonth}</p>
  <p>Number of Units: ${numberOfUnits}</p>
  <p>Charges per Unit: ${chargesPerUnit}</p>
  <p>Net Amount Payable (within Due Date): ${netAmountPayable}</p>
  <p>Late Payment Surcharge: ${latePaymentSurcharge}</p>
  <p>Gross Amount Payable (after Due Date): ${grossAmountPayable}</p>
`);
