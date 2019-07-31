// Write a function removeInvalidCharactersFromThisString which returns a version of the string which removes "invalid" characters.

function removeInvalidCharactersFromThisString(str) {
    
    console.log(str.replace(/[|+=_\[\]\{\}-]/g,""));
    
    return str.replace(/[|+=_\[\]\{\}-]/g,"")
    
}

// For example, if you were given the following string:
// quill[0]{1}|2+=
// Your function would return
// quill012