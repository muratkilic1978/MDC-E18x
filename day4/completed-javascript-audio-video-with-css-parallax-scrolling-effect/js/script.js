// function that is enabled on scrolling
window.onscroll = function() {
var audIst = document.getElementById("audioIstanbul");
var audFir = document.getElementById("audioFirenze");
var audPa = document.getElementById("audioParis");

var istanbulArea = document.getElementById("istanbul");
var parisArea = document.getElementById("paris");
var firenzeArea = document.getElementById("firenze");
    
var videoIst = document.getElementById("videoIstanbul");
var offsetTop = videoIst.getBoundingClientRect().top;
var offsetBottom = videoIst.getBoundingClientRect().bottom;
    

    if( offsetTop <= 840 && offsetTop > -240) {
        videoIst.play();
    } else if ( offsetBottom < 250 || offsetBottom > 1390) {
        videoIst.pause();
    }
    
    if ( parisArea.getBoundingClientRect().top > 585 || parisArea.getBoundingClientRect().bottom < 58 )
    {
        audPa.pause();
    } else
    {
        audPa.play();
    }
    
    if ( istanbulArea.getBoundingClientRect().top > 685 || istanbulArea.getBoundingClientRect().bottom < 58 )
    {
        audIst.pause();
    } else
    {
        audIst.play();
    }
    
    if ( firenzeArea.getBoundingClientRect().top > 585 || firenzeArea.getBoundingClientRect().bottom < 58 )
    {
        audFir.pause();
    } else
    {
        audFir.play();
    }
    
    
    
    
    
    
    
    
    
}


    /* When the user clicks on the button, scroll to the top of the document
    *  This code snippet was inspired by W3Schools https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    */
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }



    /* How To Add smooth scrolling to all links - https://gist.github.com/aggiedinger/0179406445a032d56b7c674d893fdd8e
    */
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });