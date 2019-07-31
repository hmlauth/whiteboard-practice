// Write a function that determines if its string argument is a palindrome.

function isStringPalindrome(str) {
    // str = str.toLowerCase();

    var fwdStr = [];
    var reverseStr = [];

    for (var i = 0; i < str.length; i++) {
        fwdStr.push(str[i]);
    }

    for (var i = str.length - 1; 0 <= i; i--) {
        reverseStr.push(str[i]);
    }

    if (fwdStr.toString() === reverseStr.toString()) {
        console.log(true);
        return true
    } else {
        console.log(false);
        return false
    }

}

var str = "Hannah";
isStringPalindrome(str);

var str2 = "Hello";
isStringPalindrome(str2);