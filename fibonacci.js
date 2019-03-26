function fibonacciASequenceFoundInNature(whichFib) {

    var indexOfFib = whichFib - 1;
    var arr = [0,1];
    var temp = 0;
    var value = 0;

    for (var i = 0; i < indexOfFib; i++) {
        temp = parseInt(arr[i]) + parseInt(arr[i+1]);
        arr.push(temp);
        }
        console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        if (i === indexOfFib) {
            console.log(arr[i])
            value = arr[i]
        }
    }
    console.log(value)
    return value
}

fibonacciASequenceFoundInNature(5);
fibonacciASequenceFoundInNature(7);

// function fibonacciASequenceFoundInNature(whichFib) {
    
//     var fib = whichFib - 1;
    
//      if (whichFib === 1) {
//          return 0
//      } else {
        
//         var goldenRatio = ((Math.pow(1.61803398874989484820, fib)) - (Math.pow(-0.61803398874989484820, fib)));
//         var squareRootFive = Math.sqrt(5);
//         var getWhichFib = (goldenRatio/squareRootFive);

//         console.log(getWhichFib);
         
//      }
    
//     return Math.round(getWhichFib)
    
// }

// fibonacciASequenceFoundInNature(3);
// fibonacciASequenceFoundInNature(6);
// fibonacciASequenceFoundInNature(25);
// fibonacciASequenceFoundInNature(40);

// 3 > 2
// 6 > 8
// 25 > 46368

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }