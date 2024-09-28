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

/* Practice Task 2 */

// Display the instructor names that has the position senior using filter

const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'},
]

const seniors = instructor.filter(person => person.position === 'Senior');
console.log(seniors);

/* Output =>  
{ name: 'Nodi', age: 28, position: 'Senior' },
{ name: 'Shobuj', age: 30, position: 'Senior' }
*/

const namesOfSenior = seniors.map(person => person.name);
console.log(namesOfSenior); // Output => [ 'Nodi', 'Shobuj' ]

/* Practice Task 3 */

// Return Sum by for loop

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
]

let sumAge = 0;
for(const person of people){
    sumAge += person.age;
}

console.log('The sum of ages is', sumAge); // Output => The sum of ages is 57

// Return sum by reduce() method

const people2 = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
]

const sumAgesByReduce = people.reduce((sum, person) => sum + person.age, 0);
console.log('The sum of ages with reduce is', sumAgesByReduce);
 
//Output => The sum of ages with reduce is 57