function bubbleSortDIY(arr) {
    // set a variable `sorted` to false to flag when the entire array has been sorted. When false the array still needs to be sorted. 
    var sorted = false;

    // create a while loop that sorts the numbers in the array 
    // The while loop loops through a block of code as long as a specified condition is true.

    // while sorted is false
    while (!sorted) {
        // set sorted to true
        sorted = true;

        // loop through given array
        for (var i = 0; i < arr.length; i++) {
            // compare current element with next element 
            // if current element is larger than next element then switch them and then set sorted to false
            // For example: if we have an array of [1,3,2] then 1 will stay in place but we will drop into the if code block when we compare 3 and 2 because 3 > 2. 
            if (arr[i] > arr[i+1]) {
                // set sorted to false - While we sort 3 to the proper position, sorted will be false because 3 is not yet sorted.
                sorted = false;
                // set current index to var "temp" to hold this value so we can set it later. In this example we hold the value of our current element (3) as temp.
                var temp = arr[i];
                // now set current element as the next element
                // in this case we are now setting the current element as the one directly after it. 2 will not be set as the current element.
                arr[i] = arr[i + 1];
                // then take the 3 (which is temp) and put it in the i + 1 position.
                arr[i + 1] = temp;

                // the function has looped through the entire array while sorted is false. Once the loop completes, the array will now stop at sorted true which then signals the loop to stop and then return arr.
            }
        }
    }

    // return sorted array
    console.log(arr);
    return arr
}

var arr1 = [1, 2, 1, 1];
bubbleSortDIY(arr1)
var arr2 = [9, 6, 7, 2, 1];
bubbleSortDIY(arr2)
