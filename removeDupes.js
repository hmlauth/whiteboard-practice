function removeDupes(nums) {

    // initialize a sorted variable as false
    var sorted = false;

    // initialize object
    var object = {};
    console.log(object)

    // initialize array
    var array = [];
    console.log(array)

    // iterate over length of array
    for (var i = 0; i < nums.length; i ++) {
        // if length of object is 0 then set the first key/pair value to first element in nums array
        if (Object.keys(object).length === 0){
            object[nums[i]] = 1
            // else if the element in nums array already exists in object then increment the value by 1
        } else if (nums[i] in object) {
            object[nums[i]]++
            // else if the current element is not in the object then add to array with value of 1 (frequency)
        } else if (object[nums[i]] !== nums[i]) {
            object[nums[i]] = 1
        }
    }
    console.log("Before sort", object);

    // Now for each key in object, push that key as an integer to the array
    for (var key in object) {
        array.push(parseInt(key))
    }

    console.log("Before sort", array)

    // iterate over new array while sorted is false, or "not sorted"
        // set sorted to true
        // if current element is greater than next element
            // set the current element as a new variable
            // set the current element with the next element
            // set the next element as the new variable
    for (var i = 0; i < array.length; i++) {
        sorted = true;
        if (array[i] > array[i+1]) {
            var temp = array[i];
            array[i+1] = array[i];
            temp = array[i+1]
        }
    }
    // return the now sorted, holderArray
    console.log("After sort", array);
    return array
}

var nums = [1, 2, 2];
removeDupes(nums);

var nums2 = [1, 2, 2, 8, 9, 3, 3, 1];
removeDupes(nums2);