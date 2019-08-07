/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(string) {
    
      
    if (string === '') {
        return 0
    } else if (string === ' ' || string.length === 1 ) {
        return 1
    } else {
        
        let longestSubString = string[0]; // holds longest subString while looping
        let subString = string[0]; // initialize subString
        let prev = string[0]; // set prev to the most recent character


        for (let i = 1; i < string.length; i++) {

            if (string[i] !== prev) { // if cv is the same as pv
                if (subString.includes(string[i])) { 
                
                    let index = subString.indexOf(string[i]);
                    subString = subString.split('').splice(index + 1).join('') + string[i]
                
                } else {
                    subString += string[i]; // reinitialize subString w/ cv
                    if (subString.length > longestSubString.length) {
                        longestSubString = subString;
                    }
                }

            } else if (string[i] === prev) {
                subString = string[i]
            }

            prev = string[i];
       
    }    
         return longestSubString.length
    }
};

// TESTS
// lengthOfLongestSubstring('');
// lengthOfLongestSubstring('!@abcccbcbcbcbabcbcadef')
// lengthOfLongestSubstring('1231234123451234561234567123123412345123456')
// lengthOfLongestSubstring('123354123111111111987654321');
// lengthOfLongestSubstring('aabaab!bb');
// lengthOfLongestSubstring('ckilbkd');
// lengthOfLongestSubstring('dvdf');
// lengthOfLongestSubstring('aab');
// lengthOfLongestSubstring('abcabcbb');
// lengthOfLongestSubstring('bbbbb');
// lengthOfLongestSubstring('pwwkew');
// lengthOfLongestSubstring('cattabcdeff');
// lengthOfLongestSubstring(' ');


 // PSEUOD CODE
    // ========================================== 
    // At first, consider each letter with a loop
    // Conditions to check at each iteration
        // 1. Does cv equal the pv OR,
        // 2. Does subString contain cv?
            // If yes THEN 
                // Check if current subString length is longer to length of longestSubString
                    // If yes, replace
                // set subString equal to cv
                // set prev equal to last subString character
            // If no THEN
                // Concatenate cv to subString