/***************************
*  JS Code Challenge 02
*  
*/
/* 
John and Mike both play basketball in different teams. In the latest 3 games, John team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
GOOD LUCK :-)
Tip: tofixed(2) rounds value to two decimal
*/


var scoreJohn = (98 + 134 + 103) / 3;
scoreJohn = scoreJohn.toFixed(2);
var scoreMike = (116 + 94 + 123) / 3;
scoreMike = scoreMike.toFixed(2);
var scoreMary = (97 + 134 + 55) / 3;
scoreMary = scoreMary.toFixed(2);
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\s team wins with ' + scoreJohn + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\s team wins with ' + scoreMary + ' points');
}  else {
    console.log('There is a draw');
}
