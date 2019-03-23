// create a function that accepts an array od prices on a give day/index(i)
function buyAndSellStocks(pricesArr) {

    // initialize array to hold interesting values, intArray
    var intArray = [];

    // iterate i over pricesArr array
    for (var i = 0; i < pricesArr.length; i++) {
        console.log("i", i)
        // iterate j over remaining array (set j equal to i +1)
        for (var j = (i+1); j < pricesArr.length; j++) {
            console.log("j", j);
            // check if (j-i) is interesting i.e. greater than zero
            // if j-i is greater than zero then push the value to intArray
            if ((j-i) > 0) {
                console.log(j-i);
                intArray.push((j-i));
            }
        }
    
        // find max value and store into a new variable
        // Getting the maximum element of an array
        console.log(intArray);

        var maxValue = intArray.reduce(function(a,b) {
            return Math.max(a,b)
        });
        // return max value
        console.log(maxValue);
        return maxValue
        
    }

}

var pricesArr = [7, 1, 5, 3, 6, 4];
buyAndSellStocks(pricesArr);
// expected output is 5

var pricesArr2 = [7, 6, 4, 3, 1];
buyAndSellStocks(pricesArr2);