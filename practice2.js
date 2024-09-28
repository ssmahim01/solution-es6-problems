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