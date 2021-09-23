var elementPosition = $('#button').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#button').css('position','fixed').css('top','0');
        } else {
            $('#button').css('position','static');
        }    
});/**Proba na kopcinata so js no zasega nema funkcija */

