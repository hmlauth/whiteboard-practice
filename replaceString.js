function replaceString(oldS, newS, fullS) {
    for (var i = 0; i < fullS.length; i++) {
        if (fullS.substring(i, i + oldS.length) == oldS) {
            fullS = fullS.substring(0, i) + newS; 
        }
    }
    console.log(fullS)
}

replaceString("World", "Web", "Brave New World")