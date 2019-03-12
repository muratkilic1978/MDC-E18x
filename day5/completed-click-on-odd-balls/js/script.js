// game points 
var points = 0;


function createElements(){
    for(i = 1; i<40; i++){

    var li = document.createElement("li");
    var getNumber = randomNumber(100);

    li.style.width = "50px";
    li.style.height ="50px";
    li.style.top = randomNumber(400) +"px";
    li.style.position = "absolute";
    li.style.left = randomRange(50, 800) +'px';
    
    li.style.border = "1px solid blue";

    li.style.background = "#bf0202";
    li.style.borderRadius = "40px";
    li.style.color = "white";


    li.style.display = "flex";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";

    li.innerHTML = getNumber;

    document.getElementById("elementArea").appendChild(li);

    }
}

// Generating a random range 
function randomRange(min, max){
    return(Math.random()*(max-min)+min);
}

// Generating a random number 
function randomNumber(num){
    return(Math.floor(Math.random() * num) +1);
}

// checking wheather a number is a Odd number 
function isOdd(num) { return num % 2;}

function DividedWithThree(num) { return num % 3;}

console.log(DividedWithThree(30));
// step 01- Add an addEventlistener

function gamePlay(){
createElements();
    
document.getElementById('elementArea').addEventListener('click', function(e){
console.log('Clicked inside the UL-tag');
        
        var pointElem = document.getElementById("points");
        var removeElem = e.target;
        var listItems = document.querySelectorAll("li");
        var ul = document.getElementById("ul");
        if (listItems.length > 1) {
            if (isOdd(e.target.innerHTML) ){
                points = points + 1;
                pointElem.innerHTML = "<span>" + points +"</span>";
                removeElem.parentNode.removeChild(removeElem); 
            }else{
                console.log('This is not an Odd Number')
            }
        } else {
            console.log('Game OVER!!!');
        }
            
    }, true);   
}

gamePlay();