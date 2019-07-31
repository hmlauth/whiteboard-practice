// Write a function that finds the minimum and maximum elements from an array without using the Math.min or Math.max methods.

// Return an array of the form [minimum, maximum].

function maximin(nums) {
    console.log("ORIGINAL:" + nums);

    var negativeNumber = nums[0];
    var positiveNumber = nums[0];

    for (var i = 0; i < nums.length; i++) {
        console.log("numsi:" + nums[i]);

        if (nums.length === 1) {
            positiveNumber = nums[i];
            negativeNumber = nums[i];

        } else if (nums[i] < 0) {
            console.log("I am less than 0")
            if (nums[i] < negativeNumber) {
                negativeNumber = nums[i];
            } else if (nums[i] > negativeNumber) {
                positiveNumber = nums[i];
            }
        } else if (nums[i] > 0) {
            console.log("I am greater than 0")
            if (nums[i] > positiveNumber) {
                positiveNumber = nums[i];
            }

        }

    }
    
    var combo = [negativeNumber,positiveNumber];
    console.log(combo);
    return combo

}

var nums = [100,2,-800,-3,-1,500,-99,-6,4,20,-100,1000];
var nums2 = [-10,-5,-4,-3,-2,-1];

maximin(nums);
maximin(nums2);
