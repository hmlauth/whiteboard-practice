var reqBody =  {
    name: "Hanna",
    scores: [
        "1",
        "1",
        "1"
        ]
}

var arr = [
    {
        name: "Jane",
        scores: [
            "1",
            "2",
            "3"
            ]
    },
    {
        name: "Smith",
        scores: [
            "5",
            "5",
            "5"
            ]
    }
]

var userData = reqBody;
var userScores = userData.scores;
console.log("userScores", userScores);
var bestMatch = 0;
var leastDifferent = -Infinity;

// iterate over length of current json object "arr"
for (var i = 0; i < arr.length; i++) {
    // For each comparison set totalDifference to 0 to start
    var totalDifference = 0;

    // iterate over current user's scores.length, "reqBody"
    for (var j = 0; j < arr[i].scores.length; j++) {
        console.log("reqBody", userScores[j]);
        console.log("arr", arr[i].scores[j]);
        totalDifference += Math.abs(parseInt(userScores[j] - parseInt(arr[i].scores[j])))

        // if () {
        //     friendsScore.push(arr[i].scores[j])
        // } 
    }
}

console.log("friendsScore", friendsScore);