function majorityElement(nums) {
    // initialize an empty object to store integer and frequency of that integer
    var object = {};

    // iterate i over length of array
    for (var i = 0; i < nums.length; i ++) {
        console.log("object length", Object.keys(object).length);
        // if object is empty
        if (Object.keys(object).length === 0) {
            // set first key par value to the first element with frequency, or "count", of 1
            object[nums[i]] = 1
        // else if there is already a key value pair in object
        } else if (nums[i] in object) {
            // then increment the count of that key by 1
            object[nums[i]]++
        // else if the key does not exist
        } else if (object[nums[i]] !== nums[i]) {
            //then add the new key and set frequency, or "count", to 1
            object[nums[i]] = 1
        }
    }

    // iterate over object to determine which key has the highest frequency. Be sure to compare this frequency with the length of the original array. 

    // initialize the frequency and an empty array to store 
    var arrLength = nums.length / 2;
    var majorityElement = 0;
    // iterate over object
    for (var key in object) {
        // if count of key is greater than half the arr length
        if (object[key] > arrLength) {
            // set majorityElement to the associated key
            majorityElement = key;
        } 
    }

    console.log("majorityElement", majorityElement)
    return parseInt(majorityElement)
    // return key with the highest frequency

}

var nums = [3,2,3];
majorityElement(nums);

var nums2 = [2,2,1,1,1,2,2];
majorityElement(nums2);