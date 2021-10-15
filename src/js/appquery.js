//Funcionamiento select DOM

$(document).ready(function () {
    $('.group').hide();
    $('.group1').hide();
    $('#option1').show();
    $('#option4').show();
    $('#selectMe').change(function () {
      $('.group').hide();
      $('#'+$(this).val()).show();
    });
  
    $('#selectMe1').change(function () {
        $('.group1').hide();
        $('#'+$(this).val()).show();
    });
});


//Cambio de color a las caras

$('#far1').click(function(){
  $("#far1").toggleClass("blue");
});

$('#far2').click(function(){
  $("#far2").toggleClass("blue");
});

$('#far3').click(function(){
  $("#far3").toggleClass("blue");
});

$('#far4').click(function(){
  $("#far4").toggleClass("blue");
});

$('#far5').click(function(){
  $("#far5").toggleClass("blue");
});

$('#far6').click(function(){
  $("#far6").toggleClass("blue");
});

$('#far7').click(function(){
  $("#far7").toggleClass("blue");
});

$('#far8').click(function(){
  $("#far8").toggleClass("blue");
});

$('#far9').click(function(){
  $("#far9").toggleClass("blue");
});

$('#far10').click(function(){
  $("#far10").toggleClass("blue");
});

$('#far11').click(function(){
  $("#far11").toggleClass("blue");
});

$('#far12').click(function(){
  $("#far12").toggleClass("blue");
});

$('#far13').click(function(){
  $("#far13").toggleClass("blue");
});

$('#far14').click(function(){
  $("#far14").toggleClass("blue");
});

$('#far15').click(function(){
  $("#far15").toggleClass("blue");
});

$('#far16').click(function(){
  $("#far16").toggleClass("blue");
});



