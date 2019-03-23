function twoSum(nums, target) {
    function push(i) {
        finalIndex.push(nums.indexOf(nums[i]));
    }
 
    
    console.log(nums.indexOf(2));
    
    var finalIndex = [];
 
    for ( i = 0; i < nums.length; i++ ) {
        
        if ( (nums[i] + nums[i+1]) === target) {
            push(i)
            finalIndex.push(nums.indexOf(nums[i+1]));

        } else if ( (nums[i] + nums[i+2]) === target) {
            finalIndex.push(nums.indexOf(nums[i]));
            finalIndex.push(nums.indexOf(nums[i+2]));
        } else if ( (nums[i] + nums[i+3]) === target ) {
            finalIndex.push(nums.indexOf(nums[i]));
            finalIndex.push(nums.indexOf(nums[i+3]));
        } else if ( (nums[i + 1] + nums[i+2]) === target ) {
            finalIndex.push(nums.indexOf(nums[i+1]));
            finalIndex.push(nums.indexOf(nums[i+2]));
        } else if ( (nums[i + 1 ] + nums[i+3]) === target ) {
            finalIndex.push(nums.indexOf(nums[i+1]));
            finalIndex.push(nums.indexOf(nums[i+3]));
        } else if ( (nums[i + 2] + nums[i+3]) === target ) {
            finalIndex.push(nums.indexOf(nums[i+2]));
            finalIndex.push(nums.indexOf(nums[i+3]));
        }
    
    }

        console.log(finalIndex);
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