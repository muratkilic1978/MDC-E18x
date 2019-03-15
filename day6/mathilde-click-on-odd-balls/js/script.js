// background
document.body.style.backgroundColor = "grey";
document.body.style.backgroundImage = "url('images/start.jpg')";

// game points
var points = 0;

function createElements() {
    for (i = 1; i < 35; i++) {

        var li = document.createElement("li");
        var getNumber = randomNumber(50);

        li.style.width = "40px";
        li.style.height = "40px";
        li.style.top = randomNumber(400) + "px";
        li.style.position = "absolute";
        li.style.left = randomRange(50, 800) + 'px';

        li.style.background = "white";
        li.style.borderRadius = "50px";
        li.style.fontSize = "22px";


        li.style.display = "flex";
        li.style.justifyContent = "center";
        li.style.alignItems = "center";

        li.innerHTML = getNumber;

        document.getElementById("elementArea").appendChild(li);

    }
}

// Generating a random range 
function randomRange(min, max) {
    return (Math.random() * (max - min) + min);
}

// Generating a random number 
function randomNumber(num) {
    return (Math.floor(Math.random() * num) + 1);
}

// checking wheather a number is a Odd number 
function isOdd(num) {
    return num % 2;
}

function DividedWithThree(num) {
    return num % 3;
}

console.log(DividedWithThree(30));
// step 01- Add an addEventlistener

function gamePlay() {
    createElements();

    document.getElementById('elementArea').addEventListener('click', function (e) {

        var pointElem = document.getElementById("points");
        var removeElem = e.target;
        var listItems = document.querySelectorAll("li");
        var ul = document.getElementById("ul");
        if (listItems.length > 1 && (points >= 0)) {

            // NEW options if correct ->
            if (isOdd(e.target.innerHTML)) {
                document.getElementById('pling').play();
                console.log('Correct!');
                points = points + 3;

                if (points < 10) {
                    document.body.style.backgroundImage = "url('images/correct1.jpg')";
                } else if ((points >= 10) && (points < 15)) {
                    document.body.style.backgroundImage = "url('images/correct2.jpg')";
                } else if ((points >= 15) && (points < 20)) {
                    document.body.style.backgroundImage = "url('images/correct3.jpg')";
                } else if ((points >= 20) && (points < 25)) {
                    document.body.style.backgroundImage = "url('images/correct4.jpg')";
                } else if ((points >= 25) && (points < 30)) {
                    document.body.style.backgroundImage = "url('images/correct5.jpg')";
                } else {
                    document.body.style.backgroundImage = "url('images/win.jpg')";
                    alert('You WON with a total of ' + points + ' points!');
                    document.getElementById('crowd').play();
                }
            }

            // NEW options if incorrect ->
            else {
                document.getElementById('wrong').play();
                console.log('Incorrect!');
                points = points - 5;

                if (points >= 25) {
                    document.body.style.backgroundImage = "url('images/false1.jpg')";
                } else if ((points < 25) && (points >= 20)) {
                    document.body.style.backgroundImage = "url('images/false2.jpg')";
                } else if ((points < 20) && (points >= 15)) {
                    document.body.style.backgroundImage = "url('images/false3.jpg')";
                } else if ((points < 15) && (points >= 10)) {
                    document.body.style.backgroundImage = "url('images/false4.jpg')";
                } else if ((points < 10) && (points >= 0)) {
                    document.body.style.backgroundImage = "url('images/false5.jpg')";
                } else {
                    document.body.style.backgroundImage = "url('images/gameover.jpg')";
                    alert('Game over!');
                    document.getElementById('sad').play();
                }
            }

            pointElem.innerHTML = "<span>" + points + "</span>";
            removeElem.parentNode.removeChild(removeElem);
            document.getElementById("points").textContent = points;
        }

    }, true);

}

gamePlay();
