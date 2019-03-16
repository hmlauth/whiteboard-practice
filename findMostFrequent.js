function findMostFrequent(nums) {

    // iterate over nums array
    var object = {};

    for (var i = 0; i < nums.length; i ++) {

        if (Object.keys(object).length === 0){
            object[nums[i]] = 1
        } else if (nums[i] in object) {
            object[nums[i]]++
        } else if (object[nums[i]] !== nums[i]) {
            object[nums[i]] = 1
        }
    }

    var frequency = -Infinity;
    var mostFrequentPairs = [];
    for (var key in object) {
        if (object[key] > frequency) {
            frequency = object[key];
            mostFrequentPairs = [];
        } 
        
        if (object[key] === frequency) {
            mostFrequentPairs.push(parseInt(key));
        }   
    }

    return mostFrequentPairs
 

}

var arr2 = [10,6,6,4,4,20,100,100,100,5,-1,0,0,4];
findMostFrequent(arr2);