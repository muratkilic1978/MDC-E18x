/* Examine the document object model */
// Prints out to console the DOM-tree
console.log(document);

// Prints out to console the Domain name
console.log(document.domain);

// Prints out to console the URL
console.log(document.URL);

// Prints out to console the title
console.log(document.title);

// Prints out to console the doctype
console.log(document.doctype);

// Prints out to console the head-tree
console.log(document.head);

// Prints out to console the body-tree
console.log(document.body);

// Change the document title
document.title = "JS DOM Manipulation";

/* getElementById manipulation */
// Manipulate the DOM with getElementById and innerHTML
var headerItem = document.getElementById("header-item");
headerItem.innerHTML += "<h4>I added a new Heading4</h4>";

// Make a variable for a specific ID in the DOM by using getElementByID
var headerTitle = document.getElementById("header-title");
// Fetching the text inside the headerTitle variable
console.log(headerTitle.textContent);

// Make a variable for a specific ID in the DOM by using getElementByID
var btn = document.getElementById("submitBtnDark");
// Styling the background for the specific ID
btn.style.backgroundColor = "purple";
// Styling the width for the specific ID
btn.style.width = "100%";

/* getElementByClassName */

// Make a variable for a common class in the DOM by using getElementByClassName
var items = document.getElementsByClassName("list-group-item");

//Writing out to console
console.log(items);
// Selecting item on position 0 and printing out the content
items[0].textContent = "Apple";
// Selecting item on position 1 and printing out the content
items[1].textContent = "Watermelon";

//Styling item on position 0
items[0].style.color = "red";

// Looping through items array and change the background color
for(var i= 0; i <items.length; i++)
    {
       items[i].style.backgroundColor = "grey";
    }

/* getElementsByTagName  */


// Make a variable containing all tagNames equal "li" in the DOM by using getElementsByTagName
var li = document.getElementsByTagName("li");
//Writing out to console
console.log(li);
//Writing out the li item on position 0 to the console
console.log(li[0]);
//Writing out text in the li item on position 1 to the console
li[1].textContent = "Strawberry";
//Styling the li item on position 2
li[2].style.fontWeight = "bold";
//Styling the li item on position 2
li[2].style.backgroundColor = "maroon";
//Styling the li item on position 3
li[3].style.color = "yellow";
//Styling the li item on position 3
li[3].style.backgroundColor = "navy";

// Looping through "li" array and change the background color
for(var i = 0; i <li.length; i++)
    {
        li[i].style.backgroundColor = "lightgrey";
    }
    
    
    
    
    