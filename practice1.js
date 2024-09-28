/* Practice Task 1 */

/* Convert odd to even */
// Using map() method.

let oddArray = [1, 3, 5, 7, 9];

const evenArray = oddArray.map(odd => odd + 1);

console.log(evenArray); // Output => [ 2, 4, 6, 8, 10 ]

// Using for loop

let oddArray2 = [1, 3, 5, 7, 9];
let evenArray2 = [];

for(let i = 0; i < oddArray2.length; i++){
    const arrayOfOdd = oddArray2[i];
    const toEvenArray = arrayOfOdd + 1;
    evenArray2.push(toEvenArray);
}

console.log(evenArray2); // Output => [ 2, 4, 6, 8, 10 ]

// Using filter() method to get all the elements which are divisible by 10

const numbers = [33, 50, 79, 78, 90, 101, 30];
const newArray = numbers.filter(num => num % 10);
console.log(newArray); // Output => [ 33, 79, 78, 101 ]