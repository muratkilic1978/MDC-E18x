// JavaScript Events Listeners
//Event-driven programmering: your program waits for events and uses them as triggers to run the next function(s)

// Syntax
// object.addEventListener(event, function)

var buttonOne = document.getElementById("btn1");

var buttonTwo = document.getElementById("btn2");

var txt = document.getElementById("txt");

var lnk = document.getElementById("lnk");

lnk.addEventListener('click', (ev)=>{
    console.log(ev.type);
    ev.preventDefault();
});

//txt.addEventListener('input', getContentFunction);
//
//txt.addEventListener('change', getContentFunction);
//
//txt.addEventListener('blur', getContentFunction);
        
//buttonOne.addEventListener('click', doSomeThingFunction);
//
//buttonTwo.addEventListener('mouseover', doSomeThingFunction);

//function goto(ev){
//    //ev.preventDefault();
////     lnk.href = "http://facebook.com";
////     lnk.innerHTML = "facebook";
//    document.getElementById("lnk").href =" http://facebook.com";
//    
//    document.getElementById("lnk").innerHTML = "Facbook";
//    
//}

//function getContentFunction(ev){
//    console.log(ev.type, ev.target.value);
//}

//function doSomeThingFunction(ev){
//    console.log(ev.type, ev.target, ev.target.value);
//    buttonOne.style.backgroundColor = "pink";
//    document.getElementById("wrapper").style.backgroundColor = "red";
//}












