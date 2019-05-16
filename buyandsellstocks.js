// create a function that accepts an array of prices on a give day/index(i)
function buyAndSellStocks(input) {
    console.log(input);

    // initialize array to hold interesting values, intArray
    var intArray = [];

    // iterate i over pricesArr array
    for (var i = 0; i < input.length; i++) {
        // console.log("input[i]", input[i]);
        // console.log("i", i)
        // iterate j over remaining array (set j equal to i +1)
        for (var j = (i+1); j < input.length; j++) {
            // console.log("input[j]", input[j])
            // console.log("j", j);
            // check if (j-i) is interesting i.e. greater than zero
            // if j-i is greater than zero then push the value to intArray
            if ((input[j]-input[i]) > 0) {
                // console.log(difference);
                intArray.push(input[j]-input[i]);
            }
        }
    }
 
        // find max value and store into a new variable
        // Getting the maximum element of an array

        var maxValue = Math.max(...intArray);

        if (maxValue === -Infinity) {
            console.log("0")
            return 0
        } else {
            console.log(maxValue)
            return maxValue
        }
}

var pricesArr = [7, 1, 5, 3, 6];
buyAndSellStocks(pricesArr);
// expected output is 5

var pricesArr2 = [7, 6, 4, 3, 1];
buyAndSellStocks(pricesArr2);