function reverseAString(str) {

    var reverseStr = [];

    for (var i = str.length - 1; 0 <= i; i--) {
        reverseStr.push(str[i]);
    }

    console.log(reverseStr.join(''));
    return reverseStr.join('');
 
}

var str = "foobar";
reverseAString(str);