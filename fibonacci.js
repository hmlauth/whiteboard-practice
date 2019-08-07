/* Write a function returnFibonacciValueAtGivenIndex which accepts a number (n) and returns the nth number of the fibonacci sequence.

INPUT: Index
OUTPUT: Value of number at the given index
EXAMPLE: 
a. Given index of 7, return value of 13
b. Given index of 5, return value of 5
[0,1,1,2,3,5,8,13]

*/


function returnFibonnaciValueAtGivenIndex(index) {
    
    // keep current index and previous index stored in values vs and array. 
    let a = 0, b = 1, temp = 0, i = 0;

    while (i < index) {
        temp = a + b; 
        a = b; 
        b = temp; 
        i++
    }

    console.log(a);
    return a
}

returnFibonnaciValueAtGivenIndex(5);
returnFibonnaciValueAtGivenIndex(7);


