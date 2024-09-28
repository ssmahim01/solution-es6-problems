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