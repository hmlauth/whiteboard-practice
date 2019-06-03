// PURPOSE: Show difference between higher-order function and call back by using them together

// TASK: 
// 1. INPUT: Create function that accepts an array of numbers as the first parameter and a callback function (containing intructions) as the second parameter
// 2. OUTPUT: The function will return the new array with values based on the instructions
// 3. EXAMPLE:
    // arr = [1,2,3]
    // instructions = multiple each value by 2
    // output = [2,4,6]

function copyArrayAndManipulate(array, instructions) {
    return array.map(number => instructions(number))
}

// instructions
function multiplyByTwo(number) {
    return number * 2
}

function divideByTwo(number) {
    return number / 2
}

// Array of numbers
const array = [1,2,3]
let multiplyResult = copyArrayAndManipulate(array, multiplyByTwo)
let divideResult = copyArrayAndManipulate(array, divideByTwo)
console.log("Multiply Result: ", multiplyResult)
console.log("Divide Result: ", divideResult)

// Array of strings
const stringArray = ['1','2','3'];
let multiplyStringResult = copyArrayAndManipulate(stringArray, multiplyByTwo)
console.log("Multiply Result (stringArray): ", multiplyStringResult)