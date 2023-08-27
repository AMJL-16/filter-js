  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

/* The filter method is used to take out elements that 
you don't want or need in an array 
*/

/* The callback method is similar to the one in the map method
it will be executed on every element of the array.
but her the callback function must return a test that will
evaluate to either true or false (BOOLEAN METHOD)
SO, if the item being tested in the array pass the test, it will
be included in the results returned by the filter method.
If false, it'll be filtered out.
*/ 

// here is an example with numbers
let nums = [1,2,3,4,5,6,7,8,9,10];

let filteredResults = nums.filter(num => num % 2 === 0);
/*
here if it's true all the matching values (pair numbers) will be printed
to the console when I console.log() but
if false the non-matching values (uneven numbers) will be 
filtered out of the results.
*/ 
console.log(filteredResults);

// Simple Filtering
const people = [ // in this array each people is an object
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
/*I want to iterate through this array and  
create a new array of only the people who 
are old enough to drink alcohol.
Those who are at least 21 years old.
In other words, my resulting array should have only michael in it,
since everyone else is under age 21.*/ 

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// now, if you wanted to pluck just paul object out of the array of people above?
const justPaul = people.filter(paulo => paulo.age === 18)[0];
// or people.filter(paulo => paulo.name === 'Paul');
// or cleaner  people.filter(P => p.name or age === 'Paul' or 18);
// the 2nd or is much cleaner , less verbose
console.log(justPaul) 

/*
if you want to access the object itself simply append the index [0]
position of the element you want to access, the above will access 
name: Paul */


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];



// filter challenge


