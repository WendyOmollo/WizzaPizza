// User interface
// Displaying the ordering form
$(document).ready(function(){
  $(".ordering").click(function(){
    $(".details").slideDown();
    $("#purchase").slideDown();
    $(".toppings").slideDown();
    $("#placeorder").slideDown();

  $("#placeorder").click(function(){
      // Displays the delivery button
        $("#delivery").slideDown();
  });
});
  // Sets the checked state of a checkbox
  $(document).ready(function(){
    var boxes = $(".custom-checkbox");
    function checkBoxes(event){
      document.body.div.span = event.target.value;
      for(var i=0; i<boxes.length; i++){
        boxes[i].addEventListener(checkBoxes);
      }
    }
    // function check(){
    //   $("#defaultInline1").checked = true;
    //   $("#defaultInline2").checked = true;
    //   $("#defaultInline3").checked = true;
    //   $("#defaultInline4").checked = true;
    //   $("#defaultInline5").checked = true;
    //   $("#defaultInline6").checked = true;
    // }
    // function uncheck(){
    //   $("#defaultInline1").checked = false;
    //   $("#defaultInline2").checked = false;
    //   $("#defaultInline3").checked = false;
    //   $("#defaultInline4").checked = false;
    //   $("#defaultInline5").checked = false;
    //   $("#defaultInline6").checked = false;
    // }
  });
   
  $("#placeorder").click(function(event){
      event.preventDefault();
  // Gets the input of one pizza
      var onePizza = function add(pizzaSize,pizzaCrust,pizzaTop){
      var pizzaSize = parseInt($("#inputGroupSelect1 option:selected").val());
      var pizzaCrust=parseInt($("#inputGroupSelect2 option:selected").val());
      // var pizzaTop= parseInt($("checkbox:span").val());
        return pizzaSize + pizzaCrust;
      }
  // Multiplies the total of one pizza times how many they are ordered
       function multiply(){
        var pizzaQuantity= parseInt($("input#amount").val());
        return onePizza() * pizzaQuantity;
      }
      alert(multiply());

      

  });
 
  ; 
  
  });





// Alerting the user that their order has been taken
$(document).ready(function(){
  $("#delivery").click(function(){
    function addDelivery(){
      return multiply() + 150;
    }
    addDelivery()
    prompt("Delivery fee is 150/=.Enter your location");
    var location = ""
    switch(location){
      case " "
    }


  });
  $("#purchase").click(function(){
  alert("We have received your order.Your pizza shall be delivered to you.Thank you for being a good customer.");
  });
});