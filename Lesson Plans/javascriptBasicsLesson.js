// Review of JavaScript Basics
// Basic Review - Datatypes, Obj/Arr notations, console.log, functions, for loops/methods, basic operators

// DataTypes
// Number
// String
// Boolean
// Undefined
// Null

// Arrays/Objects
const ages = [ 1, 20, 2, 5, 10 ]; // '' "" `` 
const names = [ 'Mary', 'Jane', 'John','Albert','William' ]
const companies = [
    {name: 'Company 1', category: 'Retail', employees: '100', startYear: '1980', endYear: '2000'},
    {name: 'Company 2', category: 'Technology', employees: '10', startYear: '2015', endYear: '2019'},
    {name: 'Company 3', category: 'Finance', employees: '1000', startYear: '1976', endYear: '2000'},
];

// Examples
// 1. console.log + exploring array indeces and length

console.log(ages)
console.log(names)
console.log(companies)

console.log(ages.length)
console.log(names.length)
console.log(companies.length)

console.log(ages[0])
console.log(names[0])
console.log(companies[0])

console.log(ages[1])
console.log(names[1])
console.log(companies[1])

// 2. Introducing for loops
//a. What if we want to print out each element in the array separately?
function printArrayItems (array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

printArrayItems(ages);
printArrayItems(names);

// 3. Introducing if statements / conditions 
// Print out ages greater than or equal to 5
function printGreaterThanFive(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            console.log(array[i])
        }
    }
}
printGreaterThanFive(ages)

// Print out names that start with J. Introducing 'charAt' string method as well.
function printStartsWithJ(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === 'J') {
            console.log(array[i])
        }
    }
}
printStartsWithJ(names) 

// Print out companies who have been around for less than 20 years. Introducing dot notation for objects.
function printNewCompanies(array) {
    for (i = 0; i < array.length; i++) {
        const companyAge = (array[i].endYear - array[i].startYear)
        if ( companyAge < 20 ) {
           console.log('Company Name:', array[i].name);
           console.log('Company Age:', companyAge)
       }
    }
}

printNewCompanies(companies)