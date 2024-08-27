/*Palindrome Checker: Create a recursive function to check if
 a given string is a palindrome (reads the same forwards and
  backwards), ignoring spaces, punctuation, and capitalization.*/

function palindrome(name) {
  const newName = name.length;

  for (i = 0; i <= newName; i++) {
    if (name[i] !== name[newName - 1 - i]) {
      console.log("False");
      return false;
    }
  }
  console.log("True");
  return true;
}
palindrome("WoW");
