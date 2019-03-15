//Game points
var points = 0;

function createElements() {
    const elements = [];
    // Creating a for-loop => we will become 40 li items
    while (elements.length < 40) {
        // Creaing a li item
        var li = document.createElement("li");
        // get a random number from 0 to 100
        var getNumber = randomNumber(100);
        var x = randomRange(50, 800);
        var y = randomNumber(400);
        var size = 40;
        // check whether one rectangle overlaps another rectangle by checking their edges
        // https://gamedev.stackexchange.com/questions/111123/how-do-i-check-if-one-square-is-overlapping-another-in-html5-canvas
        var overlaps = elements.some(element => {
            if (x >= element.x + size + 5 ||
                y >= element.y + size + 5 ||
                x + size + 5 <= element.x ||
                y + size + 5 <= element.y) {
                return false;
            } else {
                return true;
            }
        });

        /*        console.log(overlaps);*/

        if (!overlaps) {
            // Styling the li element with JavaScript
            li.style.width = "40px";
            li.style.height = "40px";
            li.style.top = y + "px";
            li.style.position = "absolute";
            li.style.left = x + "px";

            li.style.border = "1px solid blue";

            li.style.background = "#bf0202";
            li.style.borderRadius = "40px";
            li.style.color = "white";

            li.style.display = "flex";
            li.style.justifyContent = "center";
            li.style.alignItems = "center";
            // End of styling

            li.innerHTML = getNumber;

            document.getElementById("elementArea").appendChild(li);

            elements.push({
                x: x,
                y: y
            });
        }

    }

    /* console.log(elements);*/
}

// Generating a random range
function randomRange(min, max) {
    return (Math.random() * (max - min) + min);

}
// Generating a random number
function randomNumber(num) {
    return (Math.floor(Math.random() * num) + 1);
}

// Checking whether a number is an Odd number
function isOdd(num) {
    return num % 2;
}

function gamePlay() {
    createElements();

    document.getElementById('elementArea').addEventListener('click', function (e) {
        console.log(e);
        var pointElem = document.getElementById("points");
        var removeElem = e.target;
        var listItems = document.querySelectorAll("li");
        var ul = document.getElementById('elementArea');

        if (listItems.length > 1) {
            if (isOdd(e.target.innerHTML)) {
                points += 1;
                pointElem.innerHTML = "<span>" + points + "</span>";
                removeElem.parentNode.removeChild(removeElem);
            } else {
                console.log("This is not a odd number!!!");
            }
        } else {
            alert("GAME OVER amigos!!!");
        }
    });
}


gamePlay();
