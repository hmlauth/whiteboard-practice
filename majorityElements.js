/* PROBLEM:

Given an array nums of size n, find the majority element. The majority element is the element that appears more than n/2 times.

You may assume that the array is non-empty and a single majority element always exist in the array.

*/

// =============================================================
// SOLUTION 2: July 31, 2019, 8 months into learning how to code.
function getMajorityElement(array) {
    let values = [];
    let frequency = [];
    let previousElement;

    array.sort((a,b) => a - b); // sort array in chronological order so we can implement previousElement "check";

    array.forEach(cv => {
        if (cv !== previousElement) { // if currenct value does NOT equal previous element
            values.push(cv); // store value in array
            frequency.push(1); // store frequency of that value in another array
        } else { // if current value does equal previous element
            frequency[frequency.length - 1]++ // increment frequency value by 1
        }
        previousElement = cv; // set previousElement reference to cv for continued comparison
    });
    
    return values[frequency.indexOf(Math.max(...frequency))]; 
}

var nums = [3,2,3];
let majority1 = getMajorityElement(nums);
console.log(majority1);

var nums2 = [2,2,1,1,1,2,2];
let majority2 = getMajorityElement(nums2);
console.log(majority2);

// =============================================================

// SOLUTION 1: March 2019, 4 months into learning how to code.
function majorityElement(nums) {
    // initialize an empty object to store integer and frequency of that integer
    var object = {};

    // iterate i over length of array
    for (var i = 0; i < nums.length; i ++) {
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
    for (let key in object) {
        // if count of key is greater than half the arr length
        if (object[key] > arrLength) {
            // set majorityElement to the associated key
            majorityElement = key;
        } 
    }

    return parseInt(majorityElement)
    // return key with the highest frequency

}

var nums = [3,2,3];
let majority3 = majorityElement(nums);
console.log(majority3);

var nums2 = [2,2,1,1,1,2,2];
let majority4 = majorityElement(nums2);
console.log(majority4);
