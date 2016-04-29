// Scroll animation

$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 52
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 800);
        
        if (this.hash=="#section1") {
            $('.scroll-up').hide();
        }
        else {
            $('.scroll-up').show();
        }
                
        target.find('.animate').delay(1200).addClass("animated");
        setTimeout(function(){
            target.find('.animated').removeClass("animated");
        },2000);
        
        return false;
      }
    }
});

// Overlay login close

function closeLogin(){
	$('#login').modal('hide');
};

// Registration

function regUsername(args){

    var element = document.getElementById("username");
    var errText = document.getElementById("usernameErr");
    var myRegExp = new RegExp('[0-9]');

    for(var i = 0; i<args.length; i++){
        if(args.length >= 3 && !args.match(myRegExp)){
            element.classList.remove("fieldred");
            element.classList.add("fieldgreen");
            // Err Text noch Removen
        } else {
            element.classList.remove("fieldgreen");
            element.classList.add("fieldred");
            errText.innerHTML = "Mindestlänge 3 Buchstaben ohne Zahlen und Sonderzeichen";

        }
    }

    if(args.length == 0) {
        element.classList.remove("fieldgreen");
        element.classList.remove("fieldred");
        // Err Text noch Removen
    }

}
