/*Leap Year Checker: Create a function that takes a year as input and
 determines whether it is a leap year or not.
 Leap years are divisible by 4,but not by 100 unless they are also 
 divisible by 400. */

function leapYear(x) {
  if ((x % 4 === 0 && x % 100 !== 0) || x % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
}

const year = prompt("Enter Year :");
leapYear(year);
