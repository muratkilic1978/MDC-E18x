var scoreJohn = 89 + 120 + 404;
var scoreMike = 116 + 94 + 123;


function average(scoreJohn, scoreMike)
{
    var avgJohn, avgMike;
    avgJohn = (scoreJohn / 3).toFixed(2);
    avgMike = (scoreMike / 3).toFixed(2);
    console.log('John - ' +avgJohn, 'Mike - ' +avgMike);
    if (avgJohn > avgMike)
        {
            console.log('Johns team is winner with average score of ' + avgJohn);
        }
    else if(avgJohn < avgMike)
       { 
           console.log('Mikes team is winner with average score of ' + avgMike);
       }
    
    else
        {
            console.log('Draw! Both teams scored ' + avgMike);
        }
}

average(scoreJohn, scoreMike);