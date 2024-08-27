/*Fibonacci Sequence: Implement a recursive function to generate the 
nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and
 each subsequent number is the sum of the two preceding numbers
  (0, 1, 1, 2, 3, 5, 8, ...). */

function fibo(nums) {
  let n1 = 0,
    n2 = 1,
    nextNum;

  const fiboSeq = [n1, n2]; // Initialize an array to store the sequence

  for (let i = 3; i <= nums; i++) {
    nextNum = n1 + n2; // Calculate the next number in the sequence
    fiboSeq.push(nextNum); // Add the next number to the sequence
    n1 = n2; //Update n1 to be the value of n2
    n2 = nextNum; // Update n2 to be the next number in the sequence
  }
  return fiboSeq;
}
console.log(fibo(12));
