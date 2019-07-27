// Business logic
function OrderPizza(price,crust,toppings,quantity){
  this.size = price;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
}
// User interface
// Displaying the ordering form
$(document).ready(function(){
  $(".ordering").click(function(){
    $(".details").slideDown();
    $("#purchase").slideDown();
    $(".toppings").slideDown();
  });
  
  });
// Alerting the user that their order has been taken
$(document).ready(function(){
  $("#purchase").click(function(){
  alert("We have received your order.Your pizza shall be delivered to you.Thank you for being a good customer.");
  });
});