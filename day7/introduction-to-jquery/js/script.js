//$(document).ready(function(){
//   $('.myLink').on('click', function(e){
//       //alert('You have clicked on the LINK!!!');
//       //$('h1').addClass('green');
//       e.preventDefault();
//       //$('h1').fadeOut(700);
//       $('h1').fadeToggle(2000);
//   }); 
//});


//$(document).ready(function(){
//   $('.myLink').on('mouseenter', function(e){
//        //$('h1').slideToggle(700);
//       $('h1').slideUp(700);
//   }); 
//    $('.myLink').on('mouseleave', function(e){
//        //$('h1').slideToggle(700);
//       $('h1').slideDown(700);
//   }); 
//});

//$(document).ready(function(){
//    $('.myLink').click(function(){
//        $('h1').text("Hello World");
//    })
//});

//$(document).ready(function(){
//    $('.myLink').click(function(){
//        $('h1').replaceWith("<h4>Changed Heading size from 1 to 4</h4>");
//    })
//});

$(document).ready(function(){
    $('.myLink').click(function(e){
        e.preventDefault();
        $('h1').append("<p>Added new paragraph!!!</p>");
    })
});


