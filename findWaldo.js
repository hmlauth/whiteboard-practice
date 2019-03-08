// Given a string and I need to find the index of "Waldo" - long string of 

// l;kasdjf;lakjsdf;laskdjfaw;lfdkjwaldoas;dlkfjasdfl;kjasdf;alkjsjfkdjfkdjfdkfjdkjfdf

// either a string OR an array, but if an array, also get index at which Waldo appears. 

var str = "asl;dkfjasl;kdfjas;dlfjkasdf;ljkwaldoasdfkljasd;klasdfj";
var str2 = "waldostufrandomstufffff";
var str3 = "waldo";
var str4 = "randomstuffwithouthim";

var arr = ["waldo","gibberish"];
var arr2 = ["gibberish","waldo2"];
var arr3 = ["waldo1","waldo","gibberish","hellowaldohowareyou"];
var arr4 = [];

function findWaldo(input) {
    var searchTerm = "waldo";
    var indexOfWaldo = input.indexOf(searchTerm);
    if (indexOfWaldo >= 0) {
        console.log("You found waldo!")
        return "You found waldo at index of " + indexOfWaldo
    } else {
        return "Waldo isn't here"
    }
}

console.log("Strings")
console.log(findWaldo(str))
console.log(findWaldo(str2))
console.log(findWaldo(str3))
console.log(findWaldo(str4))

console.log("Arrays")
console.log(findWaldo(arr))
console.log(findWaldo(arr2))
console.log(findWaldo(arr3))
console.log(findWaldo(arr4))
