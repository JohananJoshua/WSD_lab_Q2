$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        
        $('#menu').removeClass('fa-times')
        $('header').removeClass('toggle');

    });
});


function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${message}`);

  }
