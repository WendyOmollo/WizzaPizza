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
      var pizzaSize = $("#inputGroupSelect01 option:selected").val();
      var pizzaCrust  = $("#inputGroupSelect2 option:selected").val();
      var pizzaTop= $("checkbox:span").val();
      var pricesPizza = 0;
  // In each case the price equals the value
      switch(pizzaSize){
        case "small":
          pricesPizza = 500;
          break;
        case "medium":
          pricesPizza = 750;
          break;
        case "large":
          pricesPizza = 1000;
          break;
        default:pricesPizza;
          break;
      }
// In each case the price equals the value
      switch(pizzaCrust){
        case "crispy":
          pricesPizza = 150;
          break;
        case "stuffed":
          pricesPizza = 150;
          break;
        case "gluten":
          pricesPizza = 200;
          break;
        default:pricesPizza;
          break;  
      }
 // Returns the total of the crust and size
        return parseInt(pizzaSize) + parseInt(pizzaCrust);
      }
// Multiplies the total of one pizza times how many they are ordered
        function multiply(){
         var pizzaQuantity= $("input#amount").val();
         return onePizza() * parseInt(pizzaQuantity);
       }
       alert(multiply());
  
 
// Alerting the user that their order has been taken
  $("#delivery").click(function(){
    $(".toDeliver").show();
      var deliveryMoney = $("input#Delivery").val(); 
       function addDelivery(){
        return multiply() + parseInt(deliveryMoney);
    }
        alert(addDelivery());
  });

  $("#purchase").click(function(){
    var locatePizza = $("input#location").val();
      alert("You ordered the following " + pizzaSize + pizzaCrust + pizzaQuantity + "and you paid the delivery fee." + "Your location is " + locatePizza);
    });

});