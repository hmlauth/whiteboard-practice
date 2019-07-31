// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You will return an array of these two indices.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
    
    var finalIndex = [];
 
    for ( i = 0; i < nums.length; i++ ) {
        for ( var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                finalIndex.push(i);
                finalIndex.push(j);
            }
        }
    
    }

        console.log(finalIndex);
        return finalIndex
}


// Input - an array of integers
var nums = [2, 7, 11, 15];
// Target 
var target = 9;
// Answer = [0, 1] (index of the two integers in nums array that add to the target number).
    // nums[0] + nums[1] = 9
twoSum(nums,target);

var nums2 = [2, 7, 11, 15, 100, 2, 4, 8];
var target2 = 12;
twoSum(nums2,target2);