// game points
var points = 0;

function createElements(){
    for (var i = 1; i < 40; i++)
        {
            var li = document.createElement("li");
            var getNumber = randomNumber(100);
            li.style.width = "50px";
            li.style.height = "50px";
            li.style.top = randomNumber(400) + "px";
            li.style.position = "absolute";
            li.style.left = randomRange(50, 800) + "px";
            
            li.style.border = "1px solid blue";
            
            li.style.background = "#bf0202";
            li.style.borderRadius = "40px";
            li.style.color = "white";
            
            li.style.display = "flex";
            li.style.justifyContent = "center";
            li.style.alignItems = "center";
            li.innerHTML = getNumber;
            
            document.getElementById("elementArea").appendChild(li);
        }}
    
    function randomRange(min, max)
    {
        return (Math.random()*(max-min)+min);
    }
    function randomNumber(num){
        return (Math.floor(Math.random() * num) + 1);
    }
    function isOdd(num){
        return num % 2;
    }
    function gamePlay(){
        createElements();
        var inARow = 0;
        var multiplier = 1;
        
        document.getElementById("elementArea").addEventListener('click', function(e){
            var pointElem = document.getElementById("points");
            var multiplierElem = document.getElementById("multiplier");
            var removeElem = e.target;
            var listItems = document.querySelectorAll("li");
            var ul = document.getElementById("ul");
            if (listItems.length > 1){
                if (isOdd(e.target.innerHTML)){
                    inARow++;
                    if (inARow > 4)
                        {
                            multiplier++;
                            inARow = 0;
                            multiplierElem.innerHTML = "<span>" + multiplier + "</span>";
                        }
                    if(multiplier > 2)
                        {
                            multiplierElem.style.color = "#bf0202";
                            multiplierElem.classList.add("apply-shake");
                            multiplierElem.style.position = "absolute";
                            multiplierElem.style.bottom = "1px";
                            multiplierElem.style.marginLeft = "40%";
                            multiplierElem.style.fontSize = "10em";
                        }
                    
                    points = points + 1 * multiplier;
                    pointElem.innerHTML = "<span>" + points + "</span>";
                    removeElem.parentNode.removeChild(removeElem);
                } else{
                    console.log("not an odd number");
                    multiplier = 1;
                    multiplierElem.innerHTML = "<span>" + multiplier + "</span>";
                    inARow = 0;
                    multiplierElem.classList.remove("apply-shake");
                    multiplierElem.removeAttribute("style");
                }
            }
             else {
                    alert("Game over amigos");
                }
        });
    }

gamePlay();
