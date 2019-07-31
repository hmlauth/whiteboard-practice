// Write a function averageFunctionWhichReturnsTheAverageOfAnArray which returns the average(mean) of an array of numbers.

function averageFunctionWhichReturnsTheAverageOfAnArray(nums) {
    var averageNum = 0;
    for (var i = 0; i < nums.length; i++) {
        averageNum += nums[i]
    }
    
    return averageNum/nums.length
}
