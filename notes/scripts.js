// scripts.js

// https://codepen.io/mattsince87/pen/exByn

$(document).ready( function() {


$(".week-3").click(function() {
    // var x = $("#week3").offset();
    // alert("Top: " + x.top + " Left: " + x.left);

    $('html, body').animate({
        scrollTop: $("#week3").offset().top - 75
        // document.querySelector("#week3").scrollIntoView({ behavior: 'smooth' });
    }, 1000);
});


}); // ending $(document).ready
