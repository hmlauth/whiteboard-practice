function accum(s) {
    var newStr = s[0].toUpperCase()

    for (var i = 1; i < s.length; i++) { 
        var upperCase = s[i].toUpperCase();
        var lowerCase = s[i].toLowerCase();
        newStr = newStr.concat("-", upperCase, lowerCase.repeat(i));
    }   

    return newStr
 }

 // another possible solution
 // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

 accum("aBC");
 accum("ZpglnRxqenU");
 accum("NyffsGeyylB");
 accum("MjtkuBovqrU");
 accum("EvidjUnokmM");
 accum("HbideVbxncC");