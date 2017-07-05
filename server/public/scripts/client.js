console.log('JS Sourced')

$(document).ready(function(){
  //create calculate click function
  $('#calculate').on('click',function(){
    console.log('calc click');
//number inputs
var x = $('#num1').val();
var y = $('#num2').val();

var operator = $('#operator').val();

var valuesObject = {
  x: x,
  y: y,
  type: operator
};
    console.log(valuesObject);

 $.ajax({
      type: 'POST',
      url: '/outcome',
      data: valuesObject,
      sucess: function(result){
        console.log('success, result = ', result);
        display(result);
      },
    });
  });
  function display(answerObject){
    console.log(answerObject);
    $('#outcome').append(answerObject.answer);
  }
});
