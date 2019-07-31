// You are given a string of Jewels j and a string of Stones s. Both consist of uppercase and lowercase (case-sensitive) letters.

// Your goal is to find how many Jewels are contained in the string of Stones.



function JewelsAndStones(j, s) {
    
    // initialize object that stores key value pair (or key & count pairs) count of each jewel
    var treasureBox = {};
    var totalJewels = 0
    // iterate i over jewel string 
    // push each jewel into an object and set count to 0
    for (var i = 0; i < j.length; i++) {
        treasureBox[j[i]] = 0
    }
    
    // iterate i over stone string
        // if i is equal to var key in object then increment object[key] by 1
    for (var i = 0; i < s.length; i++) {
        if (s[i] in treasureBox) {
            treasureBox[s[i]]++
        }
    }

    // add both object[key] values together 
    for (var key in treasureBox) {
        totalJewels += parseInt(treasureBox[key])      
    }
        console.log(totalJewels)
        return totalJewels

}

var j = "aA";
var s = "aAAbbb";
JewelsAndStones(j,s);