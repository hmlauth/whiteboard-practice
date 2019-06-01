// JavaScript Datatypes
// 1. What are the basic JavaScript Datatypes?
// 2. What are the three special `numbers` in JavaScript and what do they stand for?
// 3. What are the three ways you can write a String in JavaScript?
// 4. What special abilities do you have access to when using back ticks with Strings? 
// 5. What is `escaping`?
// 6. What is a `template literal`?
// 7. Which datatype has a number of associate methods (functions)? 
// 8. What is are the three types of operators? 
// 9. What does a Boolean value of false and true both equate to in a bit value?

// Operator Types - Urnary, Binary, Ternary
// 1. What is an urnary operator? A unary operator is one that takes a single operand/argument and performs an operation.
// a. What are examples of urnary operators? 
    // Unary plus (+): Tries to convert the operand into a number
    // *Unary negation (-) *: Tries to convert the operand into a number and negates after
    console.log(+3)
    console.log(+'-3')
    console.log(-3)
    console.log(-'-3')
    console.log(+'3.14')
    console.log(+'3')
    console.log(+'0xFF')
    console.log(+true)
    console.log(-true)
    console.log(+'123e-5')
    console.log(+false)
    console.log(-false)
    console.log(+null)
    console.log(-null)
    console.log(+'Infinity')
    console.log(+'-Infinity')
    console.log(-'-Infinity')
    console.log(+'infinity')
    console.log(+function(val){return val})
    console.log(+{
        valueOf: function(){
            return '0xFF'
        }
    }) // 0xFF is the hexadecimal number FF which has an integer value of 255. And the binary representation of FF is 00000000000000000000000011111111 (under the 32-bit integer).

    
    // Logical Not (!): Converts to boolean value then negates it. You can use double negation too! (!!)
    console.log(!false)
    console.log(!'false')
    console.log(!NaN)
    console.log(!0)
    console.log(!null)
    console.log(!undefined)
    console.log(!"")
    console.log(!true)
    console.log(!42)
    console.log(!'42')
    console.log(!'Hanna')
    console.log(!{})
    console.log(![])
    console.log(!function(){})
    console.log(!!'Hanna')
    console.log(!!1)
    console.log(!!0)
    
    // Increment (++): Adds one to its operand. Please note postfix (y++) and prefix (++y). Similarly with Decrement (--): Decrements by one from its operand.
        // POSTFIX
        let x = 4;
        y = x++;
        
        // PREFIX
        let x = 4;
        y = ++x

    
    // Bitwise not (~): Inverts all the bits in the operand and returns a number
    console.log(~2) // returns -3 b/c -(2+1) = -3
    console.log(~'2')
    console.log(~'3.14') // returns 2
    console.log(~3.14) // returns 2
    console.log(~'0xFF')
    console.log(~'true') // 
    console.log(~true) // returns -2 b/c true = 1 so -(1+1) = -2
    
    // typeof: Returns a string which is the type of the operand
    console.log(typeof 3)
    console.log(typeof '3')
    console.log(typeof false)
    console.log(typeof true)
    console.log(typeof null)
    console.log(typeof undefined)
    console.log(-(10-2))
    // delete: Deletes specific index of an array or specific property of an object
    // void: Discards a return value of an expression.
// 2. What is a binary operator? 



// JavaScript Quirks

console.log(8 * null)
console.log('5' - 1)
console.log('5' + 1)
console.log('five' * 1)
console.log(false == 0)
console.log(null == undefined)
console.log(null == 0)
console.log(NaN == NaN)

