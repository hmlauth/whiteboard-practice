function findMostFrequent(nums) {

    // iterate over nums array
    var object = {};
    console.log(object);
    console.log(Object.keys(object).length)

    for (var i = 0; i < nums.length; i ++) {

        if (Object.keys(object).length === 0){
            object[nums[i]] = 1
        } else if (nums[i] in object) {
            object[nums[i]]++
        } else if (object[nums[i]] !== nums[i]) {
            object[nums[i]] = 1
        }
    }


    console.log(object);
    
    for (var key in object) {
        console.log(object[key]);
    }

}

// var arr = [10,2,6,4,4,20];
// findMostFrequent(arr);

var arr2 = [10,6,6,4,4,20,100,5,-1,0,0,4];
findMostFrequent(arr2);