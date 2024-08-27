/*Ticket Pricing: Write a program that prompts the user to enter
 their age and then determines the price of a movie ticket based
  on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20 */

function ticket(age) {
  if (age <= 12) {
    console.log(`$10`);
  } else if (age <= 17) {
    console.log(`$15`);
  } else {
    console.log(`$20`);
  }
}
const movie = prompt("Enter Age :");
ticket(movie);
