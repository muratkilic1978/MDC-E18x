// Create a variable (object) that points to the first class grid
var myGridColor = document.querySelector('.grid');

// Attach an addEventListener to the object which will listen for a click-event
myGridColor.addEventListener("click", chooseElement);

// Create a function
function chooseElement(ev){
    //console.log(ev.type, ev.target.tagName);
    // if condition check if the event.target.tagName is equal to IMG with Uppercase letters
    if(ev.target.tagName === 'IMG'){
        // A marker that counts number of li-items
        var numberOfItems = this.querySelectorAll('li').length;
        //console.log(numberOfItems);
        // if condition - checks whether we have only one li-item left
        if (numberOfItems > 1)
        {
            // defining a variable that points to the element that we want to remove
            var removeTargetElement = ev.target.parentNode;
            console.log(removeTargetElement);
            // removing the child-element that was specified above from the parentNode
            removeTargetElement.parentNode.removeChild(removeTargetElement);
            
            // default routine that we will be executed if numberOfItems > 1 is false
        } else {
            // defining a variable that points to the alt-tag inside the li item
            var title = ev.target.alt;
            // overriding the h3 innerHTML with new text
            document.querySelector('h3').innerHTML = "<h3>You have choosen the " + title + " element</h3>";
        }
    } else {
        console.log(ev.type, ev.target.tagName);
    }
};




