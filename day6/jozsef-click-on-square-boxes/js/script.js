var myGridColor = document.querySelector('.grid');
var points = 0;

myGridColor.addEventListener('click', chooseElement);

document.getElementById('points').innerHTML = points;


function chooseElement(ev) {
  //console.log(ev.type, ev.target, ev.target.tagName);
  if (ev.target.tagName === 'IMG') {
    var numberOfImageItems = this.querySelectorAll('li').length;
  //  console.log(numberOfImageItems);
    if (numberOfImageItems > 1) {
      var removeTargetElement = ev.target.parentNode;
      removeTargetElement.parentNode.removeChild(removeTargetElement);
      points++;
      document.getElementById('points').innerHTML = points;
    }
    else {
      var title = ev.target.alt;
      document.querySelector('h3').innerHTML = "You have chosen " + title;
      /*document.querySelector('html').style.background = title;
      document.querySelector('body').style.background = title;
      document.querySelector('h3').style.background = title;
      document.querySelector('p').style.background = title;
      document.querySelector('span').style.background = title;*/

      document.querySelector('*').style.background = title;



    }
  }
  else {
    console.log(ev.type, ev.target.tagName);
  }
}
