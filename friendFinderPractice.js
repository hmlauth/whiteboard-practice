var friendsList = [
    {
        name: "Hanna Lauth",
        photoLink: "https://www.facebook.com/photo.php?fbid=10156460922233072&set=a.454677313071&type=3&theater",
        scores: [
            "1 (Strongly Disagree)",
            "2",
            "3",
            "4",
            "5 (Strongly Agree)",
            "5 (Strongly Agree)",
            "4",
            "3",
            "2",
            "1 (Strongly Disagree)"
            ]
    },
    {
        name: "Jennifer Anniston",
        photoLink: "https://upload.wikimedia.org/wikipedia/commons/1/16/JenniferAnistonHWoFFeb2012.jpg",
        scores: [
            "5 (Strongly Agree)",
            "5 (Strongly Agree)",
            "5 (Strongly Agree)",
            "5 (Strongly Agree)",
            "5 (Strongly Agree)",
            "5 (Strongly Agree)",
            "4",
            "3",
            "2",
            "1 (Strongly Disagree)"
            ]
    }
]

for (var i = 0; i < friendsList.length; i++) {
    console.log(friendsList[i].scores[0]);
}
// eachPerson[i]

// console.log("eachPerson", eachPerson);