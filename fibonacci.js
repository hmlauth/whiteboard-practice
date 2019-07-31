// Write a function fibonacciASequenceFoundInNature which accepts a number (n) and returns the nth number of the fibonacci sequence.

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

// recursive solution

