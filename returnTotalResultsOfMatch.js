// Write a function that takes an array (type A) of objects
// The object includes two teams and the final match result.
// considering the fact that the winning team takes 3 points, if they tie they get 1, calculate the total results of the matches. In this instance the total should be 10 

let matchResults = [
    [ "Manchester", "Chelsea", 2, 1 ], 
    [ "Arsenal", "Tottenham", 0, 3 ], 
    [ "Glasgow", "Liverpool", 1, 3 ], 
    [ "Fulham", "Plymouth", 2, 2 ] 
];


const getMatchScores = array => array.map(item => item[2] === item[3] ? 2 : 3);

const sumMatchScores = array => array.reduce((accum, value) => accum + value);

const allMatchResults = array => sumMatchScores(getMatchScores(array));

let result = allMatchResults(matchResults);
console.log(result)
