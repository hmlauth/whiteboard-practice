function fibonacciASequenceFoundInNature(whichFib) {
    
    var fib = whichFib - 1;
    
     if (whichFib === 1) {
         return 0
     } else {
        
        var goldenRatio = ((Math.pow(1.61803398874989484820, fib)) -      (Math.pow(-0.61803398874989484820, fib)));
        var squareRootFive = Math.sqrt(5);
        var getWhichFib = (goldenRatio/squareRootFive);

        console.log(getWhichFib);
         
     }
    
    return Math.round(getWhichFib)
    
}

fibonacciASequenceFoundInNature(3);
fibonacciASequenceFoundInNature(6);
fibonacciASequenceFoundInNature(25);
fibonacciASequenceFoundInNature(40);

// 3 > 2
// 6 > 8
// 25 > 46368

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }