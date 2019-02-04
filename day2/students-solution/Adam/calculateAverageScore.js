function average(a, b, c) {
    var result = 0;
    result = (a + b + c) / 3;
    return result;
}

var averageJohn = average(79, 200, 50).toFixed(2);
var averageMark = average(79, 200, 108).toFixed(2);
if (averageJohn < averageMark) {
    console.log("Marks team has won with average score of " + averageMark);
} else if (averageJohn > averageMark) {
    console.log("Johns team has won with average score of " + averageJohn);
} else {
    console.log("It was a draw.")
}