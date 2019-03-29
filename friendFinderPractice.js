var obj = {
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

var oScores = obj.scores
console.log("oScores", oScores);

var friendsScore = [];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].scores.length; j++) {
        friendsScore.push(arr[i].scores[j])
    }
}

console.log("friendsScore", friendsScore);