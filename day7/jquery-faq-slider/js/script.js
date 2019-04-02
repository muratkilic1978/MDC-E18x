

// version 1
var action = "click";
var speed = "500";

$(document).ready(function(){
    $('li.q').on(action, function(){
        $(this).next()
            .slideToggle(speed);
    });
});


 version 2
var action = "click";
var speed = "500";

$(document).ready(function(){
    $('li.q').on(action, function(){
        $(this).next()
            .slideToggle(speed)
                .siblings('li.a')
                    .slideUp();
    });
});


// version 2
var action = "click";
var speed = "500";

$(document).ready(function(){
    //question handler
    $('li.q').on(action, function(){
        //get next element
        $(this).next()
            .slideToggle(speed)
                //select all other answers
                .siblings('li.a')
                    .slideUp();
        //get image for active question
        var img = $(this).children('img');
        //remove the 'rotate class for all images except the active
        $('img').not(img).removeClass('rotate');
        //Toggle rotate class
        img.toggleClass('rotate');
        
    });
});

