var myGridColor = document.querySelector(".grid");

document.querySelector("ul").onclick = function () {
    var score = document.getElementById("points").innerHTML;
    score++;
    document.getElementById("points").innerHTML = score;
}

myGridColor.addEventListener("click", chooseElement);

function chooseElement(ev) {
    //    console.log(ev.type,ev.target.tagName)
    if (ev.target.tagName === "IMG") {
        //A marker that counts number of li-items
        var numberOfItems = this.querySelectorAll("li").length;
        if (numberOfItems > 1) {
            //Defining a variable that points to the element that I want to remove
            var removeTargerElement = ev.target.parentNode;
            //Removing the child-element that was specified bove from parentNode
            removeTargerElement.parentNode.removeChild(removeTargerElement);
        } else {
            //Defining a variable that points to the alt-tag inside the li item
            var title = ev.target.alt;
            document.querySelector("h1").innerHTML = "<h2>You have choosen the " + title + " !!</h2>";

        }
    } else {
        console.log(ev.type, ev.target.tagName)
    }
};
