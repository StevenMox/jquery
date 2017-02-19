//shows hello world once the button is clicked
$(document).ready(function() {
  $("#trigger").click(function(){
    $("#demo").html("Hello, World!");
  });
});

//shows hello world once the button is hovered
$(document).ready(function() {
  $("#trigger2").hover(function(){
    $("#demo2").html("Hello, World!");
  });
});

//shows the hello world words once a keyboard click happens
$(document).ready(function() {
  $("#trigger3").keydown(function(){
    $("#demo3").html("Hello, World!");
  });
});

//fades a box in when a click function is performed
$(document).ready(function() {
    $(".trigger4").click(function() {
        $(".overlay").fadeToggle();
    });
});
