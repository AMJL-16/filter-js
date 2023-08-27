  
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
const student = [
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

// const candidates = student.filter( student => {
  // let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5); 
//This filter will return an array of only those skills in which the student has at least five years of experience
  // return strongSkills.length > 0;});

// another way to do that is to extract the function into its own function, here its called strongSkills.
const hasStrongSkills = student => {
  let strongSkills =  student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
}

const candidates = student.filter(hasStrongSkills);/* all we've done is take what was inside the
                                                      parentheses and assign it to a variable.
                                                      This isolates the callback function and
                                                      makes it easier to reuse. */
console.log(candidates);

// we can also make it one line of code, like that:
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkill = student => student.skills.filter(has5yearsExp).length > 0;
const candidate = student.filter(hasStrongSkill);
const names = candidates.map(candidate => candidate.name); 
//using the .map() method I refined my code to only get the names of the candidates that are 5yrs+ experience
console.log(candidate);
console.log(names);


// filter challenge
let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];
/*
You will create a single line of code that should filter the students array and 
return only the items whos maths scores are greater than or equal to  90.  
As this needs to be done in a single line of code, you will also be required to 
use an arrow function that does not have a return statement.
Create a variable named: topMaths using the const keyword
Assign it a value from using the filter method on the students array
Use a single line arrow function within the filter method (should not use a return statement)
Log out the variable topMaths
*/ 
const topMaths = students.filter(items => items.results.maths >= 90);
console.log(topMaths);
